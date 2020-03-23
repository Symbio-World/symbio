import { Translate } from './translate'
import { parseTree, toTree } from '../parse-tree'

export type TranslateObject = (map: ValueMap) => Promise<ValueMap>

type Value = string | string[] | ValueMap
type ValueMap = { [key: string]: Value }

type CreateTranslateObject = (deps: Deps) => TranslateObject
type Deps = {
  translate: Translate
}

export const createTranslateObject: CreateTranslateObject = ({
  translate,
}) => async obj => {
  const pathValuePairs = parseTree(obj)
  const values = pathValuePairs.map(({ value }) => value)
  const translatedValues = await translate(values as string[]).catch(
    throwTranslateObjectError,
  )
  const translatedPathValuePairs = pathValuePairs.map(({ path }, index) => ({
    path,
    value: translatedValues[index],
  }))
  const translatedObject = toTree(translatedPathValuePairs)
  return translatedObject as ValueMap
}

const throwTranslateObjectError = (s: string) => {
  throw new TranslateObjectError(s)
}

export class TranslateObjectError extends Error {
  // @ts-ignore
  constructor(message) {
    super(message)
    this.name = 'TranslateObjectError'
    this.message = message
  }
}
