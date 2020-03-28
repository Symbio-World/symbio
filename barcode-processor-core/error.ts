export const NoSearchResultsFound = 'NoSearchResultsFound'
export type NoSearchResultsFound = typeof NoSearchResultsFound
export const SearchBarcodeRequestFailed = 'SearchBarcodeRequestFailed'
export type SearchBarcodeRequestFailed = typeof SearchBarcodeRequestFailed
export type SearchBarcodeError =
  | NoSearchResultsFound
  | SearchBarcodeRequestFailed
export type ProcessBarcodeError = SearchBarcodeError
