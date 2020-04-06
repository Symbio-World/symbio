import { createFailure } from '@symbio/ts-lib'

export const NO_SEARCH_RESULTS_FOUND = 'NO_SEARCH_RESULTS_FOUND'
export type NO_SEARCH_RESULTS_FOUND = typeof NO_SEARCH_RESULTS_FOUND
export const noSearchResultsFound = createFailure(NO_SEARCH_RESULTS_FOUND)
