import 'react-native'
import React from 'react'
import { render } from 'react-native-testing-library'
import { ProductNotFound } from './product-not-found'

describe('ProductNotFound', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<ProductNotFound />)
    expect(toJSON()).toMatchSnapshot()
  })
})
