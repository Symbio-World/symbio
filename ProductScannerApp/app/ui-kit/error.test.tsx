import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { Error } from './error'

describe('Error', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Error />)
    expect(toJSON()).toMatchSnapshot()
  })
})
