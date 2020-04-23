import * as React from 'react'
import { render } from 'react-native-testing-library'

import { Navigation } from './Navigation'

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
)

describe('Navigation', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Navigation />)
    expect(toJSON()).toMatchSnapshot()
  })
})
