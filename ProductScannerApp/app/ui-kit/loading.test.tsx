import 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

import { Loading } from './loading'

describe('Loading', () => {
  it('renders correctly', () => {
    const tree = create(<Loading />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
