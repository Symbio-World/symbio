import axios from 'axios'
import * as functions from 'firebase-functions'
import * as Core from '@symbio/barcode-processor-core'
import { scrapeProductPage } from '@symbio/barcode-processor-scraper'
import { createSearchBarcode } from '@symbio/barcode-processor-google-search'
import { createTranslateProductData } from '@symbio/barcode-processor-google-translate'
import { config } from './config'

/* eslint-disable functional/no-let, functional/immutable-data */
export const getProduct = functions.https.onCall(async data => {
  const barcode = data.barcode
  const processBarcode = Core.createProcessBarcode({
    searchBarcode: createSearchBarcode({
      config: config.googleSearch,
    }),
    fetchProductPage: async link => {
      const axiosResponse = await axios.get<Core.Html>(link)
      return { link, html: axiosResponse.data }
    },
    scrapeProductPage,
    translateProductData: createTranslateProductData({
      config: config.googleTranslate,
    }),
  })

  return processBarcode(barcode)
})
