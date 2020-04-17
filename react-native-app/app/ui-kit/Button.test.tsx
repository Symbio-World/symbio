import * as React from 'react'
import { render } from 'react-native-testing-library'
import { Button } from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Button />)
    expect(toJSON()).toMatchSnapshot()
  })
})
