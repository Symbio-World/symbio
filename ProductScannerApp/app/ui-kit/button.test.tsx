import 'react-native'
import React from 'react'
import { render } from 'react-native-testing-library'
import { Button } from './button'

describe('Error', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Button />)
    expect(toJSON()).toMatchSnapshot()
  })
})
