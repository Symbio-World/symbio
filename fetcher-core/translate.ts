import { Fetch, HttpError } from './fetch'
import { GoogleTranslateApiConfig } from './config'

type CreateTranslate = (deps: Deps) => Translate

export type Translate = (strings: string[]) => Promise<string[]>

type Deps = {
  fetch: Fetch
} & GoogleTranslateApiConfig

type TranslateResponse = {
  data: {
    translations: Translation[]
  }
}

type Translation = {
  translatedText: string
}

export const createTranslate: CreateTranslate = ({
  fetch,
  target,
  key,
  url,
}) => async (strings: string[]) => {
  const response = await fetch<TranslateResponse>({
    method: 'POST',
    url,
    data: {
      q: strings,
      target,
    },
    params: {
      key,
    },
  }).catch(throwTranslateError)
  const translations = response.data.data.translations.map(
    t => t.translatedText,
  )
  return translations
}

// @ts-ignore
const throwTranslateError = e => {
  throw new TranslateError(e)
}

export class TranslateError extends HttpError {
  // @ts-ignore
  constructor(message) {
    super(message)
    this.name = 'TranslateError'
    this.message = message
  }
}
