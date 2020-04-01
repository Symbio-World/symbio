import { TE, pipe, A, R, flatMapOr } from '@symbio/ts-lib'
import * as Model from './ProductData'
import * as Failure from './failure'

export type SearchBarcode = (
  barcode: Model.Barcode,
) => TE.TaskEither<Failure.SearchBarcodeFailure, Model.ProductSearchData>

export type FetchProductPage = (
  link: Model.Link,
) => TE.TaskEither<Failure.FetchProductPageFailure, Model.ProductPage>

export type ScrapeProductPage = (
  productPage: Model.ProductPage,
) => Model.ProductPageData

export type TranslateProductData = (
  productData: Model.ProductData,
) => TE.TaskEither<Failure.TranslateProductDataFailure, Model.ProductData>

export type ProcessBarcode = (
  b: Model.Barcode,
) => TE.TaskEither<Failure.ProcessBarcodeFailure, Model.ProductData>

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
    flatMapOr(TE.taskEither)(productSearchData => {
      const taskEithers= productSearchData.links.map(fetchProductPage)
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
