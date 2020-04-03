import * as R from 'ramda'
import * as _ from 'lodash'
import { PathValuePair, Tree, Value } from './common'

type ToValue = (pair: PathValuePair) => Value
const toValue: ToValue = ({ path, value }) => {
  if (R.isEmpty(path)) {
    return value
  }
  const [firstKey, ...rest] = path
  if (_.isNumber(firstKey)) {
    return [toValue({ path: rest, value: value })]
  }
  return { [firstKey]: toValue({ path: rest, value }) }
}

type ToTree = (pairs: PathValuePair[]) => Tree
export const toTree: ToTree = pairs => {
  const subtrees = pairs.map(toValue)
  const tree = subtrees.reduce(
    (acc, subtree) => R.mergeDeepWith(R.concat, acc, subtree),
    {},
  )
  return tree as Tree
}
