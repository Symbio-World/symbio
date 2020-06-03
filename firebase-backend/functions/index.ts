import axios from 'axios'
import * as functions from 'firebase-functions'
import * as Core from '@symbio/barcode-processor-core'
import { scrapeProductPage } from '@symbio/barcode-processor-scraper'
import { createSearchBarcode } from '@symbio/barcode-processor-google-search'
import { createTranslateProductData } from '@symbio/barcode-processor-google-translate'
import { config } from './config'
import {
  EventType,
  UserScannedBarcode,
  barcodeProcessed,
} from '@symbio/event-store-core'
import { storeEvent } from './storeEvent'
import { isBarcodeProcessed } from './isBarcodeProcessed'

export const processBarcode = Core.createProcessBarcode({
  searchBarcode: createSearchBarcode({
    config: config.googleSearch,
  }),
  fetchProductPage: async (link) => {
    const axiosResponse = await axios.get<string>(link)
    return { link, html: axiosResponse.data }
  },
  scrapeProductPage,
  translateProductData: createTranslateProductData({
    config: config.googleTranslate,
  }),
})

export const processScannedBarcode = functions
  .region('europe-west1')
  .firestore.document(`/${EventType.USER_SCANNED_BARCODE}/{eventId}`)
  .onCreate(async (snapshot, context) => {
    const { barcode } = snapshot.data() as UserScannedBarcode
    if (await isBarcodeProcessed(barcode)) {
      console.log(`barcode was already processed, skipping processing...`)
      return
    }
    try {
      console.log(
        `processing started for event id ${context.params.eventId} barcode ${barcode}`,
      )
      const productData = await processBarcode(barcode)
      console.log(
        `processing barcode completed successfully with productData ${JSON.stringify(
          productData,
          null,
          4,
        )}`,
      )
      console.log('storing results...')
      await storeEvent(barcodeProcessed({ barcode, productData }))
      console.log('results stored successfully')
    } catch (error) {
      console.log(`processing barcode failed with error ${error.toString()}`)
      await storeEvent(barcodeProcessed({ barcode, error }))
    }
  })

export const testProcessScannedBarcode = functions
  .region('europe-west1')
  .https.onCall(async (data) => {
    const barcode = data.barcode
    if (await isBarcodeProcessed(barcode)) {
      console.log(`barcode was already processed, skipping processing...`)
      return
    }
    try {
      const productData = await processBarcode(barcode)
      return barcodeProcessed({ barcode, productData })
    } catch (error) {
      console.log(`processing barcode failed with error ${error.toString()}`)
      return barcodeProcessed({ barcode, error })
    }
  })
