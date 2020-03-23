import * as R from 'ramda'

import { SearchBarcode, ProductSearchData } from './search-barcode'
import { QueryProductPage, ProductPageData } from './query-product-page'
import { TranslateObject } from './translate'

type CreateFetchProductData = (deps: Deps) => FetchProductData

export type FetchProductData = (barcode: string) => Promise<ProductData>

type Deps = {
  searchBarcode: SearchBarcode
  queryProductPage: QueryProductPage
  translateObject: TranslateObject
  preferredDomains: string[]
}

export type ProductData = ProductSearchData & ProductPageData

export const createFetchProductData: CreateFetchProductData = ({
  searchBarcode,
  queryProductPage,
  translateObject,
  preferredDomains,
}) => async (barcode: string) => {
  const initialProductData = await searchBarcode(barcode)
  const preferredLink = initialProductData.links.find(l => {
    for (const d of preferredDomains) {
      if (l.includes(d)) return true
    }
    return false
  })
  const productPageData = await queryProductPage(
    preferredLink ? preferredLink : initialProductData.links[0],
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
