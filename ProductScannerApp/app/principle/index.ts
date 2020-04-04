import { createSetupPrinciplesViewContainer } from './createSetupPrinciplesViewContainer'
import { savePrinciples } from './savePrinciples'

export { fetchPrinciples } from './fetchPrinciples'
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
