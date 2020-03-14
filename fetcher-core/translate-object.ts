import * as R from 'ramda'

import { Translate } from './translate'

type CreateTranslateObject = (deps: Deps) => TranslateObject

export type TranslateObject = (
  obj: StringValueObject,
) => Promise<StringValueObject>

type Deps = {
  translate: Translate
}

type StringValueObject = {
  [key: string]: string
}

export const createTranslateObject: CreateTranslateObject = ({
  translate,
}) => async obj => {
  const keys = R.keys(obj)
  const values = R.values(obj)
  const translatedValues = await translate(values)
  const translatedObject = keys.reduce(
    (acc, key, index) => ({
      ...acc,
      [key]: translatedValues[index],
    }),
    {},
  )
  return {
    ...obj,
    ...translatedObject,
  }
}
