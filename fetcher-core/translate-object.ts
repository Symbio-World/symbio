import * as R from 'ramda'

import { Translate } from './translate'

// TODO: fix types
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

const checkValueType = (
  {
    value = '',
    checkIsValueWrongType = (value: any) => {
      if (!value) {
        throw new Error('Value has wrong type')
      }
    },
    onArray = (value: any) => value,
    onObject = (value: any) => value,
    onString = (value: any) => value,
    onNumber = (value: any) => value,
  }: any) => {
  checkIsValueWrongType(value)
  const isValueString = typeof value === 'string'
  const isValueNumber = typeof value === 'number'
  const isValueArray = Array.isArray(value)

  if (isValueNumber) {
    return onNumber(value)
  }

  if (isValueString) {
    return onString(value)
  }
  if (isValueArray) {
    return onArray(value)
  }

  onObject(value)
}

const replaceValueWithInd = (obj: any, array: any[]): any => {
  const keys = Object.keys(obj)
  return keys.reduce((acc, k) => {
    return checkValueType({
      value: obj[k],
      checkIsValueWrongType: (value: any) => {
        if (!value && !(typeof value === 'string')) {
          throw new Error(`Encounter wrong value ${k}: ${obj[k]}`)
        }
      },
      onString: (value: any) => {
        const newArray = [ ...acc.array, value ]
        const newObject = { ...acc.obj, [k]: newArray.length - 1 }
        return {
          obj: newObject, array: newArray
        }
      },
      onArray: (value: any[]) => {
        const newArray = [ ...acc.array, ...value ]
        const newObject = { ...acc.obj, [k]: [newArray.length - obj[k].length, newArray.length - 1] }
        return {
          obj: newObject, array: newArray
        }
      },
      onObject: (value: any) => {
        return { ...acc, ...replaceValueWithInd(value, acc.array) }
      }
    })
  }, { obj: { ...obj }, array: [ ...array ] })
}

const replaceIndWithValue = (obj: any, array: any[]): any => {
  const keys = R.keys(obj)
  return keys.reduce((acc, k) => {
    return checkValueType({
      value: obj[k],
      checkIsValueWrongType: (value: any) => {
        if (!value && !(typeof value === 'number')) {
          throw new Error(`Encounter wrong value ${String(k)}: ${obj[k]}`)
        }
      },
      onNumber: (value: any) => {
        return { ...acc, [k]: array[value] }
      },
      onArray: (value: any[]) => {
        const [startInd, endInd] = value
        const arrayOfValues = array.slice(startInd, endInd + 1)
        return { ...acc, [k]: arrayOfValues }
      },
      onObject: (value: any) => {
        return { ...acc, ...replaceIndWithValue(value, array) }
      }
    })
  }, {})
}

export const createTranslateObject: CreateTranslateObject = ({
  translate,
}) => async obj => {
  const keys = R.keys(obj)
  const values = R.values(obj)
  const { obj: objectWithArrayInd, array: wordsForTranslate } = replaceValueWithInd(obj, [])
  const translatedValues = await translate(wordsForTranslate as string[])
  const translatedObject = replaceIndWithValue(objectWithArrayInd, translatedValues)
  return {
    ...obj,
    ...translatedObject,
  }
}
