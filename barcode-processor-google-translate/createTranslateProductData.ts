import * as R from 'ramda'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'
import * as Core from '@symbio/barcode-processor-core'
import { parseTree, toTree } from '@symbio/tree-parser'
import { GoogleTranslateConfig } from './GoogleTranslateConfig'
import { fetchTranslateResponse } from './fetchTranslateResponse'
import { TranslateResponse } from './model'

const DO_NOT_TRANSLATE_KEYS = ['links', 'image', 'brand']

type Deps = {
  config: GoogleTranslateConfig
  onTranslateResponse?: (translateResponse: TranslateResponse) => void
}
type CreateTranslateProductData = (deps: Deps) => Core.TranslateProductData
export const createTranslateProductData: CreateTranslateProductData = ({
  config,
  onTranslateResponse,
}) => productData => {
  return pipe(
    TE.right(productData),
    TE.chain(productData => {
      const pathValuePairs = parseTree(R.omit(DO_NOT_TRANSLATE_KEYS, productData))
      const values = pathValuePairs.map(({ value }) => value)
      return pipe(
        fetchTranslateResponse(values as string[], config),
        TE.chain(response => {
          onTranslateResponse?.(response)
          const translatedValues = response.data.translations.map(
            t => t.translatedText,
          )
          const translatedPathValuePairs = pathValuePairs.map(
            ({ path }, index) => ({
              path,
              value: translatedValues[index],
            }),
          )
          const translatedProductData = toTree(translatedPathValuePairs)
          return TE.right({
            ...productData,
            ...translatedProductData,
          })
        }),
      )
    }),
  )
}
