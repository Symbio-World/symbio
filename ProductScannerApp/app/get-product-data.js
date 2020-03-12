import { queryBarcode } from './query-barcode'
import { translateObject } from './translate-object'
import { queryProductPage } from './query-product-page'

export const getProductData = async (barcode) => {
  const initialProductData = await queryBarcode(barcode)
  console.log('initialProductData', JSON.stringify(initialProductData, null,4))
  const productPageData = await queryProductPage(initialProductData.links[0])
  const productData = { ...initialProductData, ...productPageData }
  const translated = await translateObject(productData, { skip: ['image', 'links'] })
  return translated
}