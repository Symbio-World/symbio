export type Translation = {
  translatedText: string
}

export type TranslateResponse = {
  data: {
    translations: Translation[]
  }
}
