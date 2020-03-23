import * as functions from 'firebase-functions'
import axios from 'axios'
import { createFetchProduct } from 'fetcher-core'
import { parse } from 'parser-core'
import { config } from './config'

const fetchProduct = createFetchProduct({
  fetch: axios.request,
  parse,
  googleSeachConfig: config.googleSearch,
  googleTranslateApiConfig: config.googleTranslate,
})
export const getProduct = functions.https.onCall(data => {
  return data.barcode ? fetchProduct(data.barcode) : {}
})
