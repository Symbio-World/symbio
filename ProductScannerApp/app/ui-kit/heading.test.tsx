import 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

import { Heading } from './heading'

describe('Heading', () => {
  it('renders correctly', () => {
    const tree = create(<Heading />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
