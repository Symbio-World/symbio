import * as Model from './ProductData'

export const barcode = '5782412334' as Model.Barcode
export const name = 'Margariini'
export const links = ['http://link1.com', 'http://link2.com'] as Model.Link[]
export const ingredients = 'Vesi'
export const productData = { name, links, ingredients }
export const translatedName = 'Margarin'
export const translatedIngredients = 'Water'
export const translated = {
  name: translatedName,
  links,
  ingredients: translatedIngredients,
}
