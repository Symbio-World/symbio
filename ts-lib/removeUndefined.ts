import * as R from 'ramda'
import { isPrimitive } from './isPrimitive'
import { DirtyJson } from './Json'

export const removeUndefined = (obj: DirtyJson): any =>
  Object.entries(obj).reduce((acc, [key, val]) => {
    if (val === undefined) {
      return acc
    }
    if (!isPrimitive(val) && !R.is(Array, val)) {
      return {
        ...acc,
        [key]: removeUndefined(val as DirtyJson),
      }
    }
    return {
      ...acc,
      [key]: val,
    }
  }, {})