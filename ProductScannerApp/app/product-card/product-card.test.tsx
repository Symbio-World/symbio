import 'react-native'
import React from 'react'
import { render } from 'react-native-testing-library'
import { ProductCard } from './product-card'

describe('ProductCard', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<ProductCard />)
    expect(toJSON()).toMatchSnapshot()
  })
})
