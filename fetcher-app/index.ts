import * as functions from 'firebase-functions'
import axios from 'axios'
import { config } from './config'
import { createFetchProduct } from 'fetcher-core'
import { parse } from './parse'

const fetchProduct = createFetchProduct({
  fetch: axios.request,
  parse,
  googleSeachConfig: config.googleSearch,
  googleTranslateApiConfig: config.googleTranslate,
})
export const getProduct = functions.https.onCall(data => {
  return data.barcode ? fetchProduct(data.barcode) : {}
})
