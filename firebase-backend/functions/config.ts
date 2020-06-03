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
    ? require('./env.prod.json')
    : require('./env.dev.json')
