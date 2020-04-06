import { TranslateResponse } from './TranslateResponse'
import {
  productData,
  translatedProductData,
} from '@symbio/barcode-processor-core/ProductData.fixture'

export { productData, translatedProductData }
export const translateResponse: TranslateResponse = {
  data: {
    translations: [
      {
        translatedText: translatedProductData.name,
      },
      {
        translatedText: translatedProductData.ingredients,
      },
    ],
  },
}
