import {
  fetch,
  Fetch,
  HttpError,
} from './fetch'
import { googleTranslateApi } from './config'

type CreateTranslate = (deps: Deps) => Translate

export type Translate = (strings: string[]) => Promise<string[]>

type Deps = {
  fetch: Fetch<TranslateResponse>
} & typeof googleTranslateApi

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
  url
}) => async (strings: string[]) => {
  const response = await fetch({
    method: 'POST',
    url,
    data: {
      q: strings,
      target,
    },
    params: {
      key
    }
  }).catch(throwTranslateError)
  const translations = response.data.data.translations.map(t => t.translatedText)
  return translations
}

export const translate: Translate = createTranslate({
  fetch,
  ...googleTranslateApi,
})

const throwTranslateError = (e) => {
  throw new TranslateError(e)
}

export class TranslateError extends HttpError {
  constructor(message) {
    super(message)
    this.name = 'TranslateError'
    this.message = message
  }
}
