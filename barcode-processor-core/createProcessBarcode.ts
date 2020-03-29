import * as R from 'ramda'
import * as A from 'fp-ts/lib/Array'
import * as TE from 'fp-ts/lib/TaskEither'
import * as T from 'fp-ts/lib/Task'
import { pipe } from 'fp-ts/lib/pipeable'
import * as Model from './model'
import * as Error from './error'

export type SearchBarcode = (
  barcode: Model.Barcode,
) => TE.TaskEither<Error.SearchBarcodeError, Model.ProductSearchData>

export type FetchProductPage = (link: Model.Link) => T.Task<Model.ProductPage>

export type ScrapeProductPage = (
  productPage: Model.ProductPage,
) => Model.ProductPageData

export type TranslateProductData = (
  productData: Model.ProductData,
) => T.Task<Model.ProductData>

export type ProcessBarcode = (
  b: Model.Barcode,
) => TE.TaskEither<Error.ProcessBarcodeError, Model.ProductData>

export type Props = Readonly<{
  searchBarcode: SearchBarcode
  fetchProductPage: FetchProductPage
  scrapeProductPage: ScrapeProductPage
  translateProductData: TranslateProductData
}>
export type CreateProcessBarcode = (props: Props) => ProcessBarcode
export const createProcessBarcode: CreateProcessBarcode = ({
  searchBarcode,
  fetchProductPage,
  scrapeProductPage,
  translateProductData,
}) => barcode => {
  return pipe(
    searchBarcode(barcode),
    TE.chain(productSearchData => {
      const tasks = productSearchData.links.map(fetchProductPage)
      const task = pipe(
        A.array.sequence(T.task)(tasks),
        T.chain(productPages => {
          const dataFromProductPages = productPages.map(scrapeProductPage)
          const combinedProductPageData = dataFromProductPages.reduce(
            (acc, pageData) => R.mergeDeepLeft(acc, pageData),
          )
          return T.of({ ...productSearchData, ...combinedProductPageData })
        }),
        T.chain(translateProductData),
      )
      return TE.rightTask(task)
    }),
  )
}
