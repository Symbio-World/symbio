import axios from 'axios'
import { translator } from './translator'

const GOOGLE_CUSTOM_SEARCH_URL = 'https://www.googleapis.com/customsearch/v1'
const GOOGLE_CUSTOM_SEARCH_KEY = 'AIzaSyDfMdqbe9YU_gkLi1sbFh6AGvC8zEbOqf8'
const GOOGLE_CUSTOM_SEARCH_CX = '006501581230154090039:nqafvo0yauk'

export class ApiError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ApiError'
    this.message = message
  }
}

const throwApiError = e => {
  throw new ApiError(e)
}

export const fetchProduct = async (barcode) => {
  const { name: rawName, image } = await queryBarcode(barcode)
  const name = await translator.translate(rawName).catch(throwApiError);
  return {
    name,
    image
  }
}

const queryBarcode = async (barcode) => {
  const res = await axios.get(GOOGLE_CUSTOM_SEARCH_URL, {
    params: {
      key: GOOGLE_CUSTOM_SEARCH_KEY,
      cx: GOOGLE_CUSTOM_SEARCH_CX,
      q: barcode
    }
  }).catch(throwApiError)
  const { image, name } = res.data.items[0].pagemap.product[0]
  return {
    image,
    name
  }
}

