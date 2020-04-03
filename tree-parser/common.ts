import * as _ from 'lodash'

export type Leaf = boolean | number | string | null | undefined
export type Value = Leaf | Value[] | Tree
export type Tree = { [key: string]: Value }

export type PathItem = string | number
export type Path = PathItem[]
export type PathValuePair = { path: Path; value: Leaf | [] | {} }

export const isPrimitive = (value: Value) =>
  _.isBoolean(value) || _.isNumber(value) || _.isString(value) || _.isNil(value)
