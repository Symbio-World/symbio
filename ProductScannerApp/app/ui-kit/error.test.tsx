import React from 'react'
import { render } from 'react-native-testing-library'
import { Error } from './Error'

describe('Error', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Error />)
    expect(toJSON()).toMatchSnapshot()
  })
})
