/* eslint functional/no-class: 0 functional/no-this-expression: 0 */
export class NoSearchResultsFound extends Error {
  constructor(message?: string) {
      super(message);
      this.name = 'NoSearchResultsFound';
      Object.setPrototypeOf(this, NoSearchResultsFound.prototype);
  }
}

export class SearchBarcodeRequestFailed extends Error {
  constructor(message?: string) {
      super(message);
      this.name = 'SearchBarcodeRequestFailed';
      Object.setPrototypeOf(this, SearchBarcodeRequestFailed.prototype);
  }
}

export class ValidationError extends Error {
  constructor(message?: string) {
      super(message);
      this.name = 'ValidationError';
      Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

export type SearchBarcodeError =
  | ValidationError
  | NoSearchResultsFound
  | SearchBarcodeRequestFailed

export class TranslateRequestFailed extends Error {
  constructor(message?: string) {
      super(message);
      this.name = 'TranslateRequestFailed';
      Object.setPrototypeOf(this, TranslateRequestFailed.prototype);
  }
}

export type TranslateProductDataError = ValidationError | TranslateRequestFailed

export type ProcessBarcodeError = SearchBarcodeError | TranslateProductDataError
