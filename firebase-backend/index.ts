import { pipe, E } from '@symbio/ts-lib'
import * as functions from 'firebase-functions'
import * as Core from '@symbio/barcode-processor-core'
import { scrapeProductPage } from '@symbio/barcode-processor-scraper'
import { createSearchBarcode } from '@symbio/barcode-processor-google-search'
import { createTranslateProductData } from '@symbio/barcode-processor-google-translate'
import { fetchProductPage } from './fetchProductPage'
// import { storeEvent } from './store-event'
import { config } from './config'

export const getProduct = functions.https.onCall(async data => {
  const barcode = data.barcode
  const processBarcode = Core.createProcessBarcode({
    searchBarcode: createSearchBarcode({ config: config.googleSearch }),
    fetchProductPage,
    scrapeProductPage,
    translateProductData: createTranslateProductData({
      config: config.googleTranslate,
    }),
  })
  return pipe(
    await processBarcode(barcode)(),
    E.fold(
      e => {
        console.log(e)
      },
      productData => {
        return productData
      },
    ),
  )
})
