import * as R from 'ramda'
import { isPrimitive } from '@symbio/ts-lib'
import { Tree, Path, PathValuePair, Value, Leaf } from './common'

// TODO move to ts-lib and use Json and DirtyJson types, rename to toPathValues and fromPathValues
type ParseValue = (path: Path, value: Value) => PathValuePair[]
const parseValue: ParseValue = (path, value) => {
  if (isPrimitive(value)) {
    return [{ path, value: value as Leaf }]
  }
  if (R.isEmpty(value)) {
    return [{ path, value: value }]
  }
  if (R.is(Array, value) && !R.isEmpty(value)) {
    const array = value as Value[]
    const pairs = array.map((v, index) => parseValue([...path, index], v))
    return R.unnest(pairs)
  }
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return parseTree(value as Tree, path)
}

type ParseTree = (tree: Tree, path?: Path) => PathValuePair[]
export const parseTree: ParseTree = (tree, path = []) => {
  const keys = R.keys(tree)
  return keys.reduce((acc, key) => {
    const pathValuePairs = parseValue([...path, key], tree[key])
    return [...acc, ...pathValuePairs]
  }, [] as PathValuePair[])
}
