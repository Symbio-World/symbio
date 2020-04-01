import { F } from '@symbio/ts-lib'

export const NO_SEARCH_RESULTS_FOUND = F.createFailure('NO_SEARCH_RESULTS_FOUND')
export type NO_SEARCH_RESULTS_FOUND = typeof NO_SEARCH_RESULTS_FOUND

export type SearchBarcodeFailure =
  | F.HTTP_FAILURE
  | F.DECODING_FAILURE
  | NO_SEARCH_RESULTS_FOUND

export type TranslateProductDataFailure =
  | F.HTTP_FAILURE
  | F.DECODING_FAILURE

export type FetchProductPageFailure =
  | F.HTTP_FAILURE
  | F.DECODING_FAILURE

export type ProcessBarcodeFailure =
  | SearchBarcodeFailure
  | TranslateProductDataFailure
  | FetchProductPageFailure
