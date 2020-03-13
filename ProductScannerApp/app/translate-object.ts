import * as R from 'ramda'

import { translate } from './translate'

const defaultOpts = { skip: [] }
export const translateObject = async (obj, { skip } = defaultOpts) => {
  const skipped = R.omit(skip, obj)
  const keys = Object.keys(skipped)
  const values = Object.values(skipped)
  const translatedValues = await translate(values)
  const translatedObject = keys.reduce((acc, key, index) => ({
    ...acc,
    [key]: translatedValues[index]
  }), {})
  return {
    ...obj,
    ...translatedObject
  }
}