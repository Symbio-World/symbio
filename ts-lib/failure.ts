import { PathReporter } from 'io-ts/lib/PathReporter'
import { t, _, E } from '.'

export { PathReporter }

export const normalizeErrorMessage = (e: unknown): string => {
  if (_.isString(e)) {
    return e
  }

  if (_.isError(e)) {
    return e.message
  }

  if (_.isArray(e)) {
    return PathReporter.report(E.left(e)).toString()
  }

  return (e as Record<string, unknown>).toString()
}

export const Failure = t.type({
  name: t.string,
  message: t.string,
  error: t.unknown,
})
export type Failure<T> = {
  name: T
  message: string
  error: unknown
}
export const createFailure = <Name extends string>(name: Name) => (
  e?: unknown,
): Failure<Name> => ({
  name,
  message: e && normalizeErrorMessage(e),
  error: e,
})

export const DECODING_FAILURE = 'DECODING_FAILURE'
export type DECODING_FAILURE = typeof DECODING_FAILURE
export const decodingFailure = createFailure(DECODING_FAILURE)
export type DecodingFailure = Failure<DECODING_FAILURE>

export const FETCH_FAILURE = 'FETCH_FAILURE'
export type FETCH_FAILURE = typeof FETCH_FAILURE
export const fetchFailure = createFailure(FETCH_FAILURE)
export type FetchFailure = Failure<FETCH_FAILURE>
