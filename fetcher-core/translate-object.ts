import * as R from 'ramda'

import { Translate } from './translate'

type CreateTranslateObject = (deps: Deps) => TranslateObject

export type TranslateObject = (
  obj: NestedStringValueObject,
) => Promise<NestedStringValueObject>

type Deps = {
  translate: Translate
}

type NestedStringValueObject = {
  [key: string]: string | NestedStringValueObject
}

const parseValues = (obj: any, array: any[]): any => {
  const keys = Object.keys(obj)
  return keys.reduce((acc, k) => {
    const isValueString = typeof obj[k] === 'string'
    const isValueFalse = !obj[k]
    const isValueArray = Array.isArray(obj[k])

    if (isValueFalse && !isValueString) {
      throw new Error(`Encounter wrong value ${k}: ${obj[k]}`)
    }

    if (isValueString) {
      const newArray = [ ...acc.array, obj[k] ]
      const newObject = { ...acc.obj, [k]: newArray.length - 1 }
      return {
        obj: newObject, array: newArray
      }
    }

    if (isValueArray) {
      const newArray = [ ...acc.array, ...obj[k] ]
      const newObject = { ...acc.obj, [k]: [newArray.length - obj[k].length, newArray.length - 1] }
      return {
        obj: newObject, array: newArray
      }
    }

    return { ...acc, ...parseValues(obj[k], acc.array) }
  }, { obj: { ...obj }, array: [ ...array ] })
}

const replaceIndWithValue = (obj: any, array: any[]): any => {
  const keys = R.keys(obj)
  return keys.reduce((acc, k) => {
    const isValueNumber = typeof obj[k] === 'number'
    const isValueArray = Array.isArray(obj[k])

    if (isValueNumber) {
      return { ...acc, [k]: array[obj[k]] }
    }

    if (isValueArray) {
      const arrayOfValues = array.slice(obj[k][0], obj[k][1] + 1)
      return { ...acc, [k]: arrayOfValues }
    }

    return { ...acc, ...parseValues(obj[k], array) }
  }, {})
}

export const createTranslateObject: CreateTranslateObject = ({
  translate,
}) => async obj => {
  const keys = R.keys(obj)
  const values = R.values(obj)
  const { obj: objectWithArrayInd, array: wordsForTranslate } = parseValues(obj, [])
  const translatedValues = await translate(wordsForTranslate as string[])
  const translatedObject = replaceIndWithValue(objectWithArrayInd, translatedValues)
  return {
    ...obj,
    ...translatedObject,
  }
}
