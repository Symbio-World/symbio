import axios from 'axios'
import * as R from 'ramda'
import * as Core from '@symbio/barcode-processor-core'
import { parseTree, toTree } from '@symbio/tree-parser'
import { GoogleTranslateConfig } from './GoogleTranslateConfig'
import { TranslateResponse } from './TranslateResponse'

const DO_NOT_TRANSLATE_KEYS = ['links', 'image', 'brand']

const omitEmptyKeys = R.reject(R.isEmpty)
const omitKeys = R.pipe(R.omit(DO_NOT_TRANSLATE_KEYS), omitEmptyKeys)

type Deps = {
  config: GoogleTranslateConfig
  onTranslateResponse?: (translateResponse: TranslateResponse) => void
}
type CreateTranslateProductData = (deps: Deps) => Core.TranslateProductData
export const createTranslateProductData: CreateTranslateProductData = ({
  config,
  onTranslateResponse,
}) => async (productData) => {
  const pathValuePairs = parseTree(omitKeys(productData) as {})
  const values = pathValuePairs.map(({ value }) => value)
  if (R.isEmpty(values)) {
    return productData
  }
  console.log(
    `sending a request to translate the following values: ${JSON.stringify(
      values,
      null,
      4,
    )}`,
  )
  const axiosResponse = await axios.post<TranslateResponse>(
    config.url,
    {
      q: values,
      target: config.target,
    },
    {
      params: {
        key: config.key,
      },
    },
  )
  const translateResponse = axiosResponse.data
  onTranslateResponse?.(translateResponse)
  const translatedValues = translateResponse.data.translations.map(
    (t) => t.translatedText,
  )
  const translatedPathValuePairs = pathValuePairs.map(({ path }, index) => ({
    path,
    value: translatedValues[index],
  }))
  const translatedProductData = toTree(translatedPathValuePairs)
  return {
    ...productData,
    ...translatedProductData,
  }
}
