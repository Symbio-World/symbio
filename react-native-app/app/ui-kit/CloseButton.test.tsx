import * as React from 'react'
import { render } from 'react-native-testing-library'
import { CloseButton } from './CloseButton'

describe('CloseButton', () => {
  it('renders correctly', () => {
    const handleClose = jest.fn()
    const { toJSON } = render(<CloseButton onClose={handleClose} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
