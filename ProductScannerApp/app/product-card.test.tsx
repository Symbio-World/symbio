import 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

import { ProductCard } from './product-card'

describe('ProductCard', () => {
  it('renders correctly', () => {
    const tree = create(<ProductCard />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
