import axios from 'axios'
import {
  GOOGLE_CUSTOM_SEARCH_ENGINE_KEY,
  GOOGLE_CUSTOM_SEARCH_ENGINE_CX,
  GOOGLE_TRANSLATE_API_KEY,
} from 'react-native-dotenv'
import {
  createFetchProduct,
} from 'fetcher-core'

import { createProductCardContainer } from './product-card-container'
import { parse } from './parse'

export const ProductCardContainer = createProductCardContainer({
  fetchProductData: createFetchProduct({
    fetch: axios.request,
    parse,
    googleSeachConfig: {
      key: GOOGLE_CUSTOM_SEARCH_ENGINE_KEY,
      cx: GOOGLE_CUSTOM_SEARCH_ENGINE_CX,
      url: 'https://www.googleapis.com/customsearch/v1'
    },
    googleTranslateApiConfig: {
      key: GOOGLE_TRANSLATE_API_KEY,
      url: 'https://translation.googleapis.com/language/translate/v2',
      target: 'en'
    }
  }),
})
