import * as R from 'ramda'
import { Json } from './Json'

export const normalizeErrorMessage = (e: unknown): string => {
  if (R.is(String, e)) {
    return e as string
  }

  if (R.is(Error, e)) {
    return (e as Error).message
  }

  return (e as Record<string, unknown>).toString()
}

export type Failure = {
  name: string
  message?: string
  metadata?: Json
}
export const createFailure = <Name extends string>(name: Name) => (
  e?: unknown,
  metadata?: Json
): Failure => ({
  name,
  message: e && normalizeErrorMessage(e),
  metadata
})

export type IsFailureOfType = (e: unknown, name: string) => boolean
export const isFailureOfType: IsFailureOfType = (e, name) => {
  if (R.isNil(e)) {
    return false
  }

  if (R.is(String, e)) {
    return false
  }

  if (R.is(Error, e)) {
    return false
  }

  if (!R.has('name')) {
    return false
  }

  return (e as Failure).name === name
}

export const FETCH_FAILURE = 'FETCH_FAILURE'
export type FETCH_FAILURE = typeof FETCH_FAILURE
export const fetchFailure = createFailure(FETCH_FAILURE)
