import * as React from 'react'
import { render } from 'react-native-testing-library'
import { ProductNotFound } from './ProductNotFound'

describe('ProductNotFound', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<ProductNotFound />)
    expect(toJSON()).toMatchSnapshot()
  })
})
