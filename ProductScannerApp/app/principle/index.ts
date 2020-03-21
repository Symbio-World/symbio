import { createSetupPrinciplesViewContainer } from './setup-principles-view-container'
import { savePrinciples } from './save-principles'

export { fetchPrinciples } from './fetch-principles'
export const SetupPrinciplesViewContainer = createSetupPrinciplesViewContainer({
  savePrinciples,
  principles: [
    'Vegan',
    'Vegeterian',
    'Pescatarian',
    'Gluten free',
    'Nut free',
    'Lactose free',
    'Halal',
    'Organic',
    'Eco friendly',
    'Local products',
    'No sugar',
    'No sodium',
    'Fair trade',
    'Package free',
    'Recyclable',
    'Compostable',
  ],
})