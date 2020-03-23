import * as R from 'ramda'

import { SearchBarcode, ProductSearchData } from './search-barcode'
import { QueryProductPage, ProductPageData } from './query-product-page'
import { TranslateObject } from './translate'

type CreateFetchProductData = (deps: Deps) => FetchProductData

export type FetchProductData = (barcode: string) => Promise<ProductData>

export type Deps = {
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
  const dataFromProductPages = await Promise.all(
    initialProductData.links.map(link => queryProductPage(link)),
  )
  const productPageData = dataFromProductPages.reduce((acc, pageData) =>
    R.mergeDeepLeft(acc, pageData),
  )
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
