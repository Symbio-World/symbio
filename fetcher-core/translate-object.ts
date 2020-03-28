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

export const checkValueType = (
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
  }: any, ...args: any[]) => {
  checkIsValueWrongType(value)
  const isValueString = typeof value === 'string'
  const isValueNumber = typeof value === 'number'
  const isValueArray = Array.isArray(value)

  if (isValueNumber) {
    return onNumber(value, ...args)
  }

  if (isValueString) {
    return onString(value, ...args)
  }
  if (isValueArray) {
    return onArray(value, ...args)
  }

  return onObject(value, ...args)
}

export const replaceValueWithInd = (obj: any, array: any[]): any => {
  const keys = Object.keys(obj)
  return keys.reduce((acc, k) => {
    const handleValueTypeCheck= (value: any) => {
      if (!value && !(typeof value === 'string')) {
        throw new Error(`Encounter wrong value ${k}: ${obj[k]}`)
      }
    }
    const handleStringValue = (value: any, parentAcc: any) => {
      const newArray = [ ...parentAcc.array, value ]
      const newObject = { ...parentAcc.obj, [k]: newArray.length - 1 }
      return {
        obj: newObject, array: newArray
      }
    }
    const handleObjectValue = (value: any, parentAcc: any, currentIndex: number) => {
      const newAcc = replaceValueWithInd(value, parentAcc.array)

      if (Array.isArray(parentAcc.obj[k]) && !Number.isNaN(Number(currentIndex))) {
        const arrayAcc = { ...parentAcc, array: newAcc.array }
        arrayAcc.obj[k][currentIndex] = { ...parentAcc.obj[k][currentIndex], ...newAcc.obj }
        return arrayAcc
      }
      return {
        ...parentAcc, ...newAcc,
        obj: {
          ...parentAcc.obj,
          [k]: {
            ...parentAcc.obj[k],
            ...newAcc.obj,
          }
        }
      }
    }
    const handleArrayValue = (value: any[], parentAcc: any) => {
      const newAcc = value.reduce((currentAcc, v, index: number) => {
        if (typeof v === 'string') {
          const newArray = [ ...currentAcc.array, v]
          const newObjectArray = [ ...currentAcc.obj[k] ]
          newObjectArray[index] = newArray.length - 1
          return {
            array: newArray,
            obj: {
              ...currentAcc.obj,
              [k]: newObjectArray
            }
          }
        }
        const { array: newArray } = checkValueType({
          value: v,
          checkIsValueWrongType: handleValueTypeCheck,
          onString: handleStringValue,
          onArray: handleArrayValue,
          onObject: handleObjectValue
        }, currentAcc, index)
        const newObjectArray = [ ...currentAcc.obj[k] ]

        return {
          array: newArray,
          obj: {
            ...currentAcc.obj,
            [k]: newObjectArray
          }
        }
      }, { obj: parentAcc.obj, array: parentAcc.array })
      return newAcc
    }

    return checkValueType({
      value: obj[k],
      checkIsValueWrongType: handleValueTypeCheck,
      onString: handleStringValue,
      onArray: handleArrayValue,
      onObject: handleObjectValue
    }, { ...acc })
  }, { obj: { ...obj }, array: [ ...array ] })
}

export const replaceIndWithValue = (obj: any, array: any[]): any => {
  const keys = R.keys(obj)
  return keys.reduce((acc, k) => {
    const handleValueTypeCheck= (value: any) => {
      if (!value && !(typeof value === 'number')) {
        throw new Error(`Encounter wrong value ${String(k)}: ${acc[k]}`)
      }
    }
    const handleNumberValue = (value: any, parentAcc: any) => {
      return { ...parentAcc, [k]: array[value] }
    }
    const handleObjectValue = (value: any, parentAcc: any, currentIndex: number) => {
      const newAcc = replaceIndWithValue(value, array)
      if (Array.isArray(parentAcc[k]) && !Number.isNaN(Number(currentIndex))) {
        const arrayAcc = { ...parentAcc }
        arrayAcc[k][currentIndex] = { ...parentAcc[k][currentIndex], ...newAcc }
        return arrayAcc
      }

      return {
        ...parentAcc,
        ...(parentAcc[k] ? {
          [k]: {
            ...parentAcc[k],
            ...newAcc,
          }
        }: newAcc)
      }
    }
    const handleArrayValue = (value: any[], parentAcc: any) => {
      return value.reduce((currentAcc, v, index: number) => {
        if (typeof v === 'number') {
          const newObjectArray = [ ...currentAcc[k] ]
          newObjectArray[index] = array[currentAcc[k][index]]
          return { ...currentAcc, [k]: newObjectArray }
        }
        const newObj = checkValueType({
          value: v,
          checkIsValueWrongType: handleValueTypeCheck,
          onNumber: handleNumberValue,
          onArray: handleArrayValue,
          onObject: handleObjectValue
        }, currentAcc[k][index])
        const newObjectArray = [ ...currentAcc[k] ]
        newObjectArray[index] = { ...currentAcc[k][index], ...newObj }
        return { ...currentAcc, [k]: newObjectArray }
      }, { ...parentAcc })
    }
    return checkValueType({
      value: obj[k],
      checkIsValueWrongType: handleValueTypeCheck,
      onNumber: handleNumberValue,
      onArray: handleArrayValue,
      onObject: handleObjectValue
    }, acc)
  }, { ...obj })
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
