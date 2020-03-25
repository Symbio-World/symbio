import * as functions from 'firebase-functions'
import { parse } from '@symbio/parser-core'
import { createConveyor } from '@symbio/conveyor-core'
import {
  fetchSearchResponse,
  fetchProductPage,
  fetchTranslateResponse,
} from './fetch-product-parts'
import { storeEvent } from './store-event'

export const getProduct = functions.https.onCall(async data => {
  const barcode = data.barcode
  const conveyor = createConveyor({
    fetchSearchResponse: async b => {
      const searchResponse = await fetchSearchResponse(b)
      storeEvent({ searchResponse, barcode })
      return searchResponse
    },
    fetchProductPage: async link => {
      const html = await fetchProductPage(link)
      storeEvent({ html, barcode, link })
      return html
    },
    parse: (link, html) => {
      const productPageData = parse(link, html)
      storeEvent({ productPageData, link, barcode })
      return productPageData
    },
    fetchTranslateResponse: async strings => {
      const translateResponse = await fetchTranslateResponse(strings)
      storeEvent({ translateResponse, barcode, strings })
      return translateResponse
    },
  })
  const productData = barcode ? await conveyor(barcode) : {}
  storeEvent({ barcode, productData })
  return productData
})
