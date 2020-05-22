import * as React from 'react'
import { render } from 'react-native-testing-library'
import { CloseButton } from './CloseButton'

describe('CloseButton', () => {
  it('renders correctly', () => {
    const handlePress = jest.fn()
    const { toJSON } = render(<CloseButton onPress={handlePress} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
