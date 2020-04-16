import * as functions from 'firebase-functions'
import { GoogleSearchConfig } from '@symbio/barcode-processor-google-search'
import { GoogleTranslateConfig } from '@symbio/barcode-processor-google-translate'

type FirebaseAdminConfig = {
  serviceAccountPath: string
  databaseUrl: string
}

export type Config = {
  googleSearch: GoogleSearchConfig
  googleTranslate: GoogleTranslateConfig
  firebaseAdmin: FirebaseAdminConfig
}

export const config: Config =
  process.env.NODE_ENV === 'production'
    ? functions.config().env
    : require('./env.dev.json')
