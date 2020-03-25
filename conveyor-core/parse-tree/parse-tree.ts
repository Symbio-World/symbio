import * as R from 'ramda'
import {
  Tree,
  Path,
  PathValuePair,
  Value,
  Leaf,
  isPrimitive,
  isArray,
} from './common'

type ParseTree = (tree: Tree, path?: Path) => PathValuePair[]
export const parseTree: ParseTree = (tree, path = []) => {
  const keys = R.keys(tree)
  return keys.reduce((acc, key) => {
    const pathValuePairs = parseValue([...path, key], tree[key])
    return [...acc, ...pathValuePairs]
  }, [] as PathValuePair[])
}

type ParseValue = (path: Path, value: Value) => PathValuePair[]
const parseValue: ParseValue = (path, value) => {
  if (isPrimitive(value)) {
    return [{ path, value: value as Leaf }]
  }
  if (R.isEmpty(value)) {
    return [{ path, value: value }]
  }
  if (isArray(value) && !R.isEmpty(value)) {
    const array = value as Value[]
    const pairs = array.map((v, index) => parseValue([...path, index], v))
    return R.unnest(pairs)
  }
  return parseTree(value as Tree, path)
}