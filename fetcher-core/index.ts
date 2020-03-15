import { Fetch } from './fetch'
import { createFetchProductData, FetchProductData, ProductData } from './fetch-product-data'
import { createSearchBarcode, NoDataFoundError } from './search-barcode'
import { createQueryProductPage, Parse } from './query-product-page'
import { createTranslateObject } from './translate-object'
import { createTranslate } from './translate'
import { GoogleSearchConfig, GoogleTranslateApiConfig } from './config'

type Deps = {
  fetch: Fetch
  parse: Parse,
  googleSeachConfig: GoogleSearchConfig,
  googleTranslateApiConfig: GoogleTranslateApiConfig,
}

export { FetchProductData, ProductData, Parse, NoDataFoundError }
export type CreateFetchProduct = (deps: Deps) => FetchProductData

export const createFetchProduct: CreateFetchProduct = ({
  fetch,
  parse,
  googleSeachConfig,
  googleTranslateApiConfig,
}) => createFetchProductData({
  searchBarcode: createSearchBarcode({
    fetch,
    ...googleSeachConfig
  }),
  queryProductPage: createQueryProductPage({ fetch, parse }),
  translateObject: createTranslateObject({
    translate: createTranslate({
      fetch,
      ...googleTranslateApiConfig
    })
  })
})
