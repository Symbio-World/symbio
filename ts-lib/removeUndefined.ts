import * as R from 'ramda'
import { isPrimitive } from './isPrimitive'
import { DirtyJsonMap } from './JsonMap'

export const removeUndefined = (obj: DirtyJsonMap): any =>
  Object.entries(obj).reduce((acc, [key, val]) => {
    if (val === undefined) {
      return acc
    }
    if (!isPrimitive(val) && !R.is(Array, val)) {
      return {
        ...acc,
        [key]: removeUndefined(val as DirtyJsonMap),
      }
    }
    return {
      ...acc,
      [key]: val,
    }
  }, {})
