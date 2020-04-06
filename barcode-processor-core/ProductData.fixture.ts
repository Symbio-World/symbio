export const barcode = '5782412334'
export const productSearchData = {
  name: 'Margariini',
  links: ['http://link1.com', 'http://link2.com'],
}
export const productPageData = { ingredients: 'Vesi' }
export const productData = { ...productSearchData, ...productPageData }
export const translatedProductData = {
  name: 'Margarin',
  links: productData.links,
  ingredients: 'Water',
}
