import functions from 'firebase-functions'
import { env } from './env'

type GoogleSearchConfig = {
  cx: string
  key: string
  url: string
}

type GoogleTranslateApiConfig = {
  key: string
  url: string
  target: string
}

type Config = {
  googleSearch: GoogleSearchConfig
  googleTranslate: GoogleTranslateApiConfig
}

export const config: Config =
  process.env.NODE_ENV === 'production' ? functions.config().env : env
