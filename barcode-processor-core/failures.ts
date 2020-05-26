import { createFailure } from '@symbio/ts-lib'
import { ProductData } from './ProductData'

export const NO_SEARCH_RESULTS_FOUND = 'NO_SEARCH_RESULTS_FOUND'
export type NO_SEARCH_RESULTS_FOUND = typeof NO_SEARCH_RESULTS_FOUND
export const noSearchResultsFound = (barcode: string) =>
  createFailure(NO_SEARCH_RESULTS_FOUND)(
    `Found no items for barcode ${barcode}`,
  )

export const NO_USEFUL_INFO_FOUND = 'NO_USEFUL_INFO_FOUND'
export type NO_USEFUL_INFO_FOUND = typeof NO_USEFUL_INFO_FOUND
export const noUsefulInfoFound = (barcode: string, productData: ProductData) =>
  createFailure(NO_USEFUL_INFO_FOUND)(
    `No useful information found for barcode ${barcode}. The information found is as follows: ${JSON.stringify(productData)}`,
  )
