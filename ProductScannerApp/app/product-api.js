import axios from 'axios';

const GOOGLE_CUSTOM_SEARCH_URL = 'https://www.googleapis.com/customsearch/v1'
const GOOGLE_CUSTOM_SEARCH_KEY = 'AIzaSyDfMdqbe9YU_gkLi1sbFh6AGvC8zEbOqf8'
const GOOGLE_CUSTOM_SEARCH_CX = '006501581230154090039:nqafvo0yauk'

export const fetchProduct = async (barcode) => {
  try {
    const res = await axios.get(GOOGLE_CUSTOM_SEARCH_URL, {
      params: {
        key: GOOGLE_CUSTOM_SEARCH_KEY,
        cx: GOOGLE_CUSTOM_SEARCH_CX,
        q: barcode
      }
    })
    const {product, aggregaterating} = res.data.items[0].pagemap
    return {
      product: {
        ...product[0],
        ...aggregaterating[0]
      },
    }
  } catch(e) {
    return {
      error: e
    }
  }
}