import * as functions from 'firebase-functions'
import axios from 'axios'
import { createFetchProduct } from 'fetcher-core'
import { parse } from 'parser-core'
import { config } from './config'

const fetchProduct = createFetchProduct({
  fetchSearchResponse: async barcode => {
    const result = await axios.get(config.googleSearch.url, {
      params: {
        key: config.googleSearch.key,
        cx: config.googleSearch.cx,
        q: barcode,
      },
    })
    return result.data
  },
  fetchProductPage: async link => {
    const result = await axios.get(link)
    return result.data
  },
  fetchTranslateResponse: async strings => {
    const result = await axios.post(
      config.googleTranslate.url,
      {
        q: strings,
        target: config.googleTranslate.target,
      },
      {
        params: {
          key: config.googleTranslate.key,
        },
      },
    )
    return result.data
  },
  parse,
})
export const getProduct = functions.https.onCall(data => {
  return data.barcode ? fetchProduct(data.barcode) : {}
})
