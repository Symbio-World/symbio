import axios from 'axios'
import * as functions from 'firebase-functions'
import * as Core from '@symbio/barcode-processor-core'
import { scrapeProductPage } from '@symbio/barcode-processor-scraper'
import { createSearchBarcode } from '@symbio/barcode-processor-google-search'
import { createTranslateProductData } from '@symbio/barcode-processor-google-translate'
import { config } from './config'

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

export const getProduct = functions.https.onCall(async data => {
  return processBarcode(data.barcode)
  try {
    return { error: null, productData: await processBarcode(data.barcode) }
  } catch (e) {
    return { error: e.message, productData: null }
  }
})
