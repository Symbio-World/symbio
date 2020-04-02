import { TE, A, R, Rr, flatMapOr, F, pipe } from '@symbio/ts-lib'
import * as PD from './ProductData'

export type Failures = F.FetchFailure | F.DecodingFailure

export type SearchBarcode = (
  barcode: PD.Barcode,
) => TE.TaskEither<Failures, PD.ProductSearchData>

export type FetchProductPage = (
  link: PD.Link,
) => TE.TaskEither<Failures, PD.ProductPage>

export type ScrapeProductPage = (
  productPage: PD.ProductPage,
) => PD.ProductPageData

export type TranslateProductData = (
  productData: PD.ProductData,
) => TE.TaskEither<Failures, PD.ProductData>

export type ProcessBarcode = (
  b: PD.Barcode,
) => TE.TaskEither<Failures, PD.ProductData>

export type Deps = {
  searchBarcode: SearchBarcode
  fetchProductPage: FetchProductPage
  scrapeProductPage: ScrapeProductPage
  translateProductData: TranslateProductData
}
export type CreateProcessBarcode = Rr.Reader<Deps, ProcessBarcode>
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
