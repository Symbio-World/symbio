import * as t from 'io-ts'

export const Translation = t.type({
  translatedText: t.string
})
export type Translation = t.TypeOf<typeof Translation>

export const TranslateResponse = t.type({
  data: t.type({
    translations: t.array(Translation)
  })
})
export type TranslateResponse = t.TypeOf<typeof TranslateResponse>
