import * as R from 'ramda'

import {
  SearchBarcode,
  ProductSearchData,
} from './search-barcode'
import {
  QueryProductPage,
  ProductPageData,
} from './query-product-page'
import {
  TranslateObject
} from './translate-object'

type CreateFetchProductData = (deps: Deps) => FetchProductData

export type FetchProductData = (barcode: string) => Promise<ProductData>

type Deps = {
  searchBarcode: SearchBarcode
  queryProductPage: QueryProductPage
  translateObject: TranslateObject
}

export type ProductData = ProductSearchData & ProductPageData

export const createFetchProductData: CreateFetchProductData = ({
  searchBarcode,
  queryProductPage,
  translateObject,
}) => async (barcode: string) => {
  const initialProductData = await searchBarcode(barcode)
  const productPageData = await queryProductPage(initialProductData.links[0])
  const productData = { ...initialProductData, ...productPageData }
  const translated = await translateObject(
    // @ts-ignore
    R.omit(['links', 'image', 'brand'], productData),
  )
  return {
    ...productData,
    ...translated,
  }
}
