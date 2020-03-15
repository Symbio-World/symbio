import 'react-native'
import React from 'react'
import { render } from 'react-native-testing-library'
import { ProductView } from './product-view'

describe('ProductView', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<ProductView />)
    expect(toJSON()).toMatchSnapshot()
  })
})
