type CreateTranslate = (deps: Deps) => Translate

export type Translate = (strings: string[]) => Promise<string[]>

export type FetchTranslateResponse = (strings: string[]) => Promise<TranslateResponse>
type Deps = {
  fetchTranslateResponse: FetchTranslateResponse
}

type TranslateResponse = {
  data: {
    translations: Translation[]
  }
}

type Translation = {
  translatedText: string
}

export const createTranslate: CreateTranslate = ({
  fetchTranslateResponse,
}) => async (strings: string[]) => {
  const response = await fetchTranslateResponse(strings).catch(throwTranslateError)
  const translations = response.data.translations.map(
    t => t.translatedText,
  )
  return translations
}

// @ts-ignore
const throwTranslateError = e => {
  throw new TranslateError(e)
}

export class TranslateError extends Error {
  // @ts-ignore
  constructor(message) {
    super(message)
    this.name = 'TranslateError'
    this.message = message
  }
}
