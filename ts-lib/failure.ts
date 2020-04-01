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
export type Failure = t.TypeOf<typeof Failure>
export const createFailure = <Name extends string>(
  name: Name,
  e?: unknown,
) => ({
  name,
  message: e && normalizeErrorMessage(e),
  error: e,
})

export const DECODING_FAILURE = createFailure('DECODING_FAILURE')
export type DECODING_FAILURE = typeof DECODING_FAILURE

export const HTTP_FAILURE = createFailure('HTTP_FAILURE')
export type HTTP_FAILURE = typeof HTTP_FAILURE
