/* eslint-disable functional/no-class, functional/no-this-expression */
import { normalizeErrorMessage } from '@symbio/ts-lib'

export class NoSearchResultsFound extends Error {
  constructor(e?: unknown) {
    super(normalizeErrorMessage(e))
    this.name = 'NoSearchResultsFound'
    Object.setPrototypeOf(this, NoSearchResultsFound.prototype)
  }
}

export class SearchBarcodeRequestFailed extends Error {
  constructor(e?: unknown) {
    super(normalizeErrorMessage(e))
    this.name = 'SearchBarcodeRequestFailed'
    Object.setPrototypeOf(this, SearchBarcodeRequestFailed.prototype)
  }
}

export class ValidationError extends Error {
  constructor(e?: unknown) {
    super(normalizeErrorMessage(e))
    this.name = 'ValidationError'
    Object.setPrototypeOf(this, ValidationError.prototype)
  }
}

export type SearchBarcodeError =
  | ValidationError
  | NoSearchResultsFound
  | SearchBarcodeRequestFailed

export class TranslateRequestFailed extends Error {
  constructor(e?: unknown) {
    super(normalizeErrorMessage(e))
    this.name = 'TranslateRequestFailed'
    Object.setPrototypeOf(this, TranslateRequestFailed.prototype)
  }
}

export type TranslateProductDataError = ValidationError | TranslateRequestFailed

export class FetchProductPageRequestFailed extends Error {
  constructor(e?: unknown) {
    super(normalizeErrorMessage(e))
    this.name = 'FetchProductPageRequestFailed'
    Object.setPrototypeOf(this, FetchProductPageRequestFailed.prototype)
  }
}

export type FetchProductPageError = ValidationError | FetchProductPageRequestFailed


export type ProcessBarcodeError = SearchBarcodeError | TranslateProductDataError | FetchProductPageError
