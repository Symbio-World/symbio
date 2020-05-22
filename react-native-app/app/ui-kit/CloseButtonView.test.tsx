import * as React from 'react'
import { render } from 'react-native-testing-library'
import { CloseButtonView } from './CloseButtonView'

describe('Button', () => {
  it('renders correctly', () => {
    const handlePress = jest.fn()
    const { toJSON } = render(<CloseButtonView onPress={handlePress} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
