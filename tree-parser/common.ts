import * as R from 'ramda'

export type Leaf = boolean | number | string | null | undefined
export type Value = Leaf | Value[] | Tree
export type Tree = { [key: string]: Value }

export type PathItem = string | number
export type Path = PathItem[]
export type PathValuePair = { path: Path; value: Leaf | [] | {} }

export const isBoolean = (value: Value) => typeof value === 'boolean'
export const isNumber = (value: Value) => typeof value === 'number'
export const isString = (value: Value) => typeof value === 'string'
export const isPrimitive = (value: Value) =>
isBoolean(value) || isNumber(value) || isString(value) || R.isNil(value)
export const isArray = (value: Value) => Array.isArray(value)
