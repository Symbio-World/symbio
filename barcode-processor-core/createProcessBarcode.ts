import * as R from 'ramda'
import { allSettled, PromiseResolution } from '@symbio/ts-lib'
import * as Model from './ProductData'
import { noUsefulInfoFound } from './failures'

export type SearchBarcode = (
  barcode: string,
) => Promise<Model.ProductSearchData>

export type FetchProductPage = (link: string) => Promise<Model.ProductPage>

export type ScrapeProductPage = (
  productPage: Model.ProductPage,
) => Model.ProductPageData

export type TranslateProductData = (
  productData: Model.ProductData,
) => Promise<Model.ProductData>

export type ProcessBarcode = (b: string) => Promise<Model.ProductData>

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
}) => async (barcode) => {
  console.log('initiating barcode search...')
  const productSearchData = await searchBarcode(barcode)
  console.log(
    `barcode search completed with ${JSON.stringify(
      productSearchData,
      null,
      4,
    )}`,
  )
  const productPageRequests = productSearchData.links.map(fetchProductPage)
  console.log(`initiating requests to product pages...`)
  const responses = await allSettled(productPageRequests)
  console.log(`received ${responses.length} responses`)
  const productPages = responses
    .filter((result) => result.status === 'fulfilled')
    .map((result) => (result as PromiseResolution<Model.ProductPage>).value)
  console.log(
    `starting to scrape data from ${productPages.length} product pages`,
  )
  const dataFromProductPages = productPages.map(scrapeProductPage)
  console.log(`data scraped: ${JSON.stringify(dataFromProductPages, null, 4)}`)
  const combinedProductPageData = dataFromProductPages.reduce(
    (acc, pageData) => R.mergeDeepLeft(acc, pageData) as Model.ProductPageData,
    {},
  )
  const productData = {
    ...productSearchData,
    ...combinedProductPageData,
  }

  console.log(
    `product data before translation: ${JSON.stringify(productData, null, 4)}`,
  )

  if (R.isEmpty(R.omit(['links'], productData))) {
    throw noUsefulInfoFound(barcode, productData)
  }

  const translatedProductData = await translateProductData(productData)
  console.log(
    `translated product data: ${JSON.stringify(
      translatedProductData,
      null,
      4,
    )}`,
  )
  return translatedProductData
}
