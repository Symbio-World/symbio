import * as R from 'ramda'

import {
  searchBarcode,
  SearchBarcode,
  ProductSearchData,
} from './search-barcode'
import {
  queryProductPage,
  QueryProductPage,
  ProductPageData,
} from './query-product-page'
import { translateObject, TranslateObject } from './translate-object'

const skipTranslation = ['image', 'links', 'brand']

type CreateFetchProductData = (deps: Deps) => FetchProductData

export type FetchProductData = (link: string) => Promise<ProductData>

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
  const translated = await translateObject(R.omit(['links'], productData))
  return {
    ...productData,
    ...translated,
  }
}

export const fetchProductData = createFetchProductData({
  searchBarcode,
  queryProductPage,
  translateObject,
})
