import axios from 'axios'
import {
  GOOGLE_CUSTOM_SEARCH_URL,
  GOOGLE_CUSTOM_SEARCH_KEY,
  GOOGLE_CUSTOM_SEARCH_CX,
} from 'react-native-dotenv'
import { ApiError } from './api-error'

export const queryBarcode = async barcode => {
  const response = await axios.get(GOOGLE_CUSTOM_SEARCH_URL, {
    params: {
      key: GOOGLE_CUSTOM_SEARCH_KEY,
      cx: GOOGLE_CUSTOM_SEARCH_CX,
      q: barcode
    }
  }).catch(throwQueryBarcodeError)
  // const product = response.data.items[0].pagemap.product[0]
  const product = response.data.items.reduce((acc, item) => {
    if (!item.pagemap || !item.pagemap.product) {
      return acc
    }
    return {
      ...item.pagemap.product[0],
      ...acc
    }
  }, {})
  const links = response.data.items.map(i => i.link)
  return {
    ...product,
    links
  }
}

const throwQueryBarcodeError = e => {
  throw new QueryBarcodeError(e)
}

export class QueryBarcodeError extends ApiError {
  constructor(message) {
    super(message)
    this.name = 'QueryBarcodeError'
    this.message = message
  }
}