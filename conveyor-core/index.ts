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
  ParseProductPage,
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
  parseProductPage: ParseProductPage
}

export {
  FetchProductData,
  ProductData,
  ParseProductPage,
  NoDataFoundError,
  FetchSearchResponse,
  FetchProductPage,
  FetchTranslateResponse,
}
export type CreateConveyor = (deps: Deps) => FetchProductData

export const createConveyor: CreateConveyor = ({
  fetchSearchResponse,
  fetchProductPage,
  fetchTranslateResponse,
  parseProductPage,
}) =>
  createFetchProductData({
    searchBarcode: createSearchBarcode({
      fetchSearchResponse,
    }),
    queryProductPage: createQueryProductPage({
      fetchProductPage,
      parseProductPage,
    }),
    translateObject: createTranslateObject({
      translate: createTranslate({
        fetchTranslateResponse,
      }),
    }),
  })
