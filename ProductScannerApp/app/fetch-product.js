import { queryBarcode } from './query-barcode'
import { translateObject } from './translate-object'

export const fetchProduct = async (barcode) => {
  const product = await queryBarcode(barcode, { skip: ['image', 'links'] })
  const translated = await translateObject(product)
  return translated
}