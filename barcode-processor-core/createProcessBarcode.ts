import * as R from 'ramda'
import { allSettled, PromiseResolution } from '@symbio/ts-lib'
import * as Model from './ProductData'

export type SearchBarcode = (
  barcode: Model.Barcode,
) => Promise<Model.ProductSearchData>

export type FetchProductPage = (link: Model.Link) => Promise<Model.ProductPage>

export type ScrapeProductPage = (
  productPage: Model.ProductPage,
) => Model.ProductPageData

export type TranslateProductData = (
  productData: Model.ProductData,
) => Promise<Model.ProductData>

export type ProcessBarcode = (b: Model.Barcode) => Promise<Model.ProductData>

export type Deps = {
  searchBarcode: SearchBarcode
  fetchProductPage: FetchProductPage
  scrapeProductPage: ScrapeProductPage
  translateProductData: TranslateProductData
}
export type CreateProcessBarcode = (deps: Deps) => ProcessBarcode
export const createProcessBarcode: CreateProcessBarcode = ({
  searchBarcode,
  fetchProductPage,
  scrapeProductPage,
  translateProductData,
}) => async barcode => {
  const productSearchData = await searchBarcode(barcode)
  const productPageRequests = productSearchData.links.map(fetchProductPage)
  const results = await allSettled(productPageRequests)
  const productPages = results
    .filter(result => result.status === 'fulfilled')
    .map(result => (result as PromiseResolution<Model.ProductPage>).value)
  const dataFromProductPages = productPages.map(scrapeProductPage)
  const combinedProductPageData = dataFromProductPages.reduce((acc, pageData) =>
    R.mergeDeepLeft(acc, pageData),
  )
  return translateProductData({
    ...productSearchData,
    ...combinedProductPageData,
  })
}
