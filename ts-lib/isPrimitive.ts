import R from 'ramda'

export const isPrimitive = (value: unknown) =>
  R.is(Boolean, value) ||
  R.is(Number, value) ||
  R.is(String, value) ||
  R.isNil(value)
