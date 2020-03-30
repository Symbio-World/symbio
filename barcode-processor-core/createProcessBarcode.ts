import { TE, pipe, A, R } from '@symbio/ts-lib'
import * as Model from './ProductData'
import * as Error from './error'

export type SearchBarcode = (
  barcode: Model.Barcode,
) => TE.TaskEither<Error.SearchBarcodeError, Model.ProductSearchData>

export type FetchProductPage = (link: Model.Link) => TE.TaskEither<Error.FetchProductPageError, Model.ProductPage>

export type ScrapeProductPage = (
  productPage: Model.ProductPage,
) => Model.ProductPageData

export type TranslateProductData = (
  productData: Model.ProductData,
) => TE.TaskEither<Error.TranslateProductDataError, Model.ProductData>

export type ProcessBarcode = (
  b: Model.Barcode,
) => TE.TaskEither<Error.ProcessBarcodeError, Model.ProductData>

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
}) => barcode => {
  return pipe(
    searchBarcode(barcode),
    TE.chain(productSearchData => {
      const taskEithers = productSearchData.links.map(fetchProductPage)
      return pipe(
        A.array.sequence(TE.taskEither)(taskEithers),
        TE.chain(productPages => {
          const dataFromProductPages = productPages.map(scrapeProductPage)
          const combinedProductPageData = dataFromProductPages.reduce(
            (acc, pageData) => R.mergeDeepLeft(acc, pageData),
          )
          return TE.right({ ...productSearchData, ...combinedProductPageData })
        }),
        TE.chain(translateProductData),
      )
    }),
  )
}
