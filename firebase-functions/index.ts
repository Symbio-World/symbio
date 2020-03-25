import * as functions from 'firebase-functions'
import { parse } from '@symbio/parser-core'
import { createFetchProduct } from '@symbio/conveyor-core'
import {
  fetchSearchResponse,
  fetchProductPage,
  fetchTranslateResponse,
} from './fetch-product-parts'
import { storeEvent } from './store-event'

export const getProduct = functions.https.onCall(async data => {
  const barcode = data.barcode
  const fetchProduct = createFetchProduct({
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
    fetchTranslateResponse: async strings => {
      const translateResponse = await fetchTranslateResponse(strings)
      storeEvent({ translateResponse, barcode, strings })
      return translateResponse
    },
    parse: (link, html) => {
      const productPageData = parse(link, html)
      storeEvent({ productPageData, link, barcode })
      return productPageData
    },
  })
  const productData = barcode ? await fetchProduct(barcode) : {}
  storeEvent({ barcode, productData })
  return productData
})
