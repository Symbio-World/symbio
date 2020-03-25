import * as functions from 'firebase-functions'

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

type FirebaseAdminConfig = {
  serviceAccountPath: string
  databaseUrl: string
}

export type Config = {
  googleSearch: GoogleSearchConfig
  googleTranslate: GoogleTranslateApiConfig
  firebaseAdmin: FirebaseAdminConfig
}

export const config: Config =
  process.env.NODE_ENV === 'production'
    ? functions.config().env
    : require('./env.json')
