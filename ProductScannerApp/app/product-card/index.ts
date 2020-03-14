import axios from 'axios'
import cheerio from 'cheerio'
import {
  GOOGLE_CUSTOM_SEARCH_ENGINE_KEY,
  GOOGLE_CUSTOM_SEARCH_ENGINE_CX,
  GOOGLE_TRANSLATE_API_KEY,
} from 'react-native-dotenv'
import {
  createFetchProduct,
} from 'fetcher-core'

import { createProductCardContainer } from './product-card-container'

export const ProductCardContainer = createProductCardContainer({
  fetchProductData: createFetchProduct({
    fetch: axios.request,
    parse: (html) => {
      const $ = cheerio.load(html)

      return {
        ingredients: $("[id$='ingredients']").text(),
        allergens: $('#info')
          .find('table')
          .find('td')
          .eq(1)
          .text(),
        origin: $('#origin')
          .find('p')
          .text(),
      }
    },
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
