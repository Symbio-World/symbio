import { translator } from './translator'
import { ApiError } from './api-error'

export const SEPARATOR = ';;;'

const defaultOpts = { skip: [] }
export const translateObject = async (obj, { skip } = defaultOpts) => {
  const keys = Object.keys(obj)
  const values = Object.values(obj)
  const stringToTranslate = values.join(SEPARATOR)
  const translatedString = await translator.translate(stringToTranslate).catch(throwTranslateObjectError)
  const translatedValues = translatedString.split(SEPARATOR)
  const translatedObject = keys.reduce((acc, key, index) => ({
    ...acc,
    [key]: skip.includes(key) ? values[index] : translatedValues[index]
  }), {})
  return translatedObject
}

const throwTranslateObjectError = e => {
  throw new TranslateObjectError(e)
}

export class TranslateObjectError extends ApiError {
  constructor(message) {
    super(message)
    this.name = 'TranslateObjectError'
    this.message = message
  }
}