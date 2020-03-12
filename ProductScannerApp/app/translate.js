import axios from 'axios'
import { googleTranslateApi } from './config'
import { ApiError } from './api-error'

export const translate = async strings => {
  validate(strings)
  const response = await axios.post(googleTranslateApi.url, {
    q: strings,
    target: googleTranslateApi.target,
  }, {
    params: {
      key: googleTranslateApi.key
    }
  }).catch(throwTranslateError)
  const translations = response.data.data.translations.map(t => t.translatedText)
  return translations
}

const validate = objects => objects.forEach(o => {
  if (typeof o !== 'string') {
    throwTranslateError(`Expected an array of strings`)
  }
})

const throwTranslateError = e => {
  throw new TranslateError(e)
}

export class TranslateError extends ApiError {
  constructor(message) {
    super(message)
    this.name = 'TranslateError'
    this.message = message
  }
}