import * as React from 'react'
import { render } from 'react-native-testing-library'

import { Navigation } from './Navigation'

describe('Navigation', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Navigation />)
    expect(toJSON()).toMatchSnapshot()
  })
})
