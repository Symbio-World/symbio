import React from 'react'
import { render } from 'react-native-testing-library'
import { ErrorView } from './ErrorView'

describe('ErrorView', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<ErrorView />)
    expect(toJSON()).toMatchSnapshot()
  })
})
