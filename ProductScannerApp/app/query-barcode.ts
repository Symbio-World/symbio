import axios from 'axios'
import { googleSearch } from './config'
import { ApiError } from './api-error'

const GOOGLE_CUSTOM_SEARCH_URL = 'https://www.googleapis.com/customsearch/v1'

export const queryBarcode = async barcode => {
  const response = await axios.get(googleSearch.url, {
    params: {
      key: googleSearch.key,
      cx: googleSearch.cx,
      q: barcode
    }
  }).catch(throwQueryBarcodeError)
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