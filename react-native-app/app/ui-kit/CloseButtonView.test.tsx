import * as React from 'react'
import { render } from 'react-native-testing-library'
import { CloseButtonView } from './CloseButtonView'

describe('CloseButtonView', () => {
  it('renders correctly', () => {
    const handleClose = jest.fn()
    const { toJSON } = render(<CloseButtonView onClose={handleClose} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
