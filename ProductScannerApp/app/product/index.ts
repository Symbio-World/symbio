import { createProductViewContainer } from './createProductViewContainer'
import { observeProductData } from './observeProductData'

export const ProductViewContainer = createProductViewContainer({
  observeProductData,
})
