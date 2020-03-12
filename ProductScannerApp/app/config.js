import {
  GOOGLE_CUSTOM_SEARCH_ENGINE_KEY,
  GOOGLE_CUSTOM_SEARCH_ENGINE_CX,
  GOOGLE_TRANSLATE_API_KEY,
  SCANDIT_ANDROID_API_KEY,
  SCANDIT_IOS_API_KEY,
} from 'react-native-dotenv'

export const googleSearch = {
  cx: GOOGLE_CUSTOM_SEARCH_ENGINE_CX,
  key: GOOGLE_CUSTOM_SEARCH_ENGINE_KEY,
  url: 'https://www.googleapis.com/customsearch/v1',
}

export const googleTranslateApi = {
  key: GOOGLE_TRANSLATE_API_KEY,
  url: 'https://translation.googleapis.com/language/translate/v2',
}

export const scandit = {
  androidKey: SCANDIT_ANDROID_API_KEY,
  iosKey: SCANDIT_IOS_API_KEY,
}