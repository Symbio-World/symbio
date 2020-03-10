import axios from 'axios'
import { translator } from './translator'

const GOOGLE_CUSTOM_SEARCH_URL = 'https://www.googleapis.com/customsearch/v1'
const GOOGLE_CUSTOM_SEARCH_KEY = 'AIzaSyDfMdqbe9YU_gkLi1sbFh6AGvC8zEbOqf8'
const GOOGLE_CUSTOM_SEARCH_CX = '006501581230154090039:nqafvo0yauk'

export const fetchProduct = async (barcode) => {
  const product = await queryBarcode(barcode)
  const translated = await translateProduct(product)
  return translated
}

const queryBarcode = async (barcode) => {
  const res = await axios.get(GOOGLE_CUSTOM_SEARCH_URL, {
    params: {
      key: GOOGLE_CUSTOM_SEARCH_KEY,
      cx: GOOGLE_CUSTOM_SEARCH_CX,
      q: barcode
    }
  }).catch(throwApiError)
  const { image, name, description } = res.data.items[0].pagemap.product[0]
  const links = res.data.items.map(i => i.link)
  return {
    image,
    name,
    description,
    links
  }
}

const translateProduct = async product => {
  const translatedJoined = await translator.translate(`${product.name};;${product.description}`).catch(throwApiError)
  const [name, description] = translatedJoined.split(";;")
  return { ...product, name, description }
}

const throwApiError = e => {
  throw new ApiError(e)
}

export class ApiError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ApiError'
    this.message = message
  }
}