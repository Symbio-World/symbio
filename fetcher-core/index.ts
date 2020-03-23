import {
  createFetchProductData,
  FetchProductData,
  ProductData,
} from './fetch-product-data'
import {
  createSearchBarcode,
  NoDataFoundError,
  FetchSearchResponse,
} from './search-barcode'
import {
  createQueryProductPage,
  Parse,
  FetchProductPage,
} from './query-product-page'
import {
  createTranslateObject,
  createTranslate,
  FetchTranslateResponse,
} from './translate'

type Deps = {
  fetchTranslateResponse: FetchTranslateResponse
  fetchSearchResponse: FetchSearchResponse
  fetchProductPage: FetchProductPage
  parse: Parse
}

export { FetchProductData, ProductData, Parse, NoDataFoundError }
export type CreateFetchProduct = (deps: Deps) => FetchProductData

export const createFetchProduct: CreateFetchProduct = ({
  fetchSearchResponse,
  fetchProductPage,
  fetchTranslateResponse,
  parse,
}) =>
  createFetchProductData({
    searchBarcode: createSearchBarcode({
      fetchSearchResponse,
    }),
    queryProductPage: createQueryProductPage({ fetchProductPage, parse }),
    translateObject: createTranslateObject({
      translate: createTranslate({
        fetchTranslateResponse,
      }),
    }),
    preferredDomains: ['prisma.ee', 'foodie.fi'],
  })
