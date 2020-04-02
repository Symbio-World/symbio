import axios from 'axios'
import { pipe, E, TE, fetchAndDecode } from '@symbio/ts-lib'
import * as functions from 'firebase-functions'
import * as Core from '@symbio/barcode-processor-core'
import { scrapeProductPage } from '@symbio/barcode-processor-scraper'
import {
  createSearchBarcode,
  SearchResponse,
} from '@symbio/barcode-processor-google-search'
import { createTranslateProductData } from '@symbio/barcode-processor-google-translate'
import { config } from './config'
import { TranslateResponse } from '@symbio/barcode-processor-google-translate'
import { storeEvent } from './storeEvent'

/* eslint-disable functional/no-let, functional/immutable-data */
export const getProduct = functions.https.onCall(async data => {
  const barcode = data.barcode
  let searchResponse: SearchResponse
  let translateResponse: TranslateResponse
  const processBarcode = Core.createProcessBarcode({
    searchBarcode: createSearchBarcode({
      config: config.googleSearch,
      onSearchResponse: response => {
        searchResponse = response
      },
    }),
    fetchProductPage: link =>
      pipe(
        fetchAndDecode(Core.Html, () => axios.get(link)),
        TE.map(html => ({ link, html })),
      ),
    scrapeProductPage,
    translateProductData: createTranslateProductData({
      config: config.googleTranslate,
      onTranslateResponse: response => {
        translateResponse = response
      },
    }),
  })
  return pipe(
    await processBarcode(barcode)(),
    E.fold(
      e => {
        throw e
      },
      productData => {
        storeEvent({
          barcode,
          searchResponse,
          translateResponse,
          productData
        })
        return productData
      },
    ),
  )
})
