export const NoSearchResultsFound = 'NoSearchResultsFound'
export type NoSearchResultsFound = typeof NoSearchResultsFound

export const SearchBarcodeRequestFailed = 'SearchBarcodeRequestFailed'
export type SearchBarcodeRequestFailed = typeof SearchBarcodeRequestFailed

export const ValidationError = 'ValidationError'
export type ValidationError = typeof ValidationError

export type SearchBarcodeError =
  | typeof ValidationError
  | typeof NoSearchResultsFound
  | typeof SearchBarcodeRequestFailed

export type ProcessBarcodeError = SearchBarcodeError
