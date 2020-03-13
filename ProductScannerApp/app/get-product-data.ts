import { queryBarcode } from './query-barcode'
import { translateObject } from './translate-object'
import { queryProductPage } from './query-product-page'

const skipTranslation = ['image', 'links', 'brand']

export const getProductData = async (barcode) => {
  const initialProductData = await queryBarcode(barcode)
  const productPageData = await queryProductPage(initialProductData.links[0])
  const productData = { ...initialProductData, ...productPageData }
  const translated = await translateObject(productData, { skip: skipTranslation })
  return translated
}