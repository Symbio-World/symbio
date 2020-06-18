import * as React from 'react'
import {
  render,
  fireEvent,
} from 'react-native-testing-library'
import { ProductView } from './ProductView'
import { CloseButton } from '../ui-kit/CloseButton'

describe('ProductView', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<ProductView />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('calls onPress', () => {
    const handleCloseButtonPress = jest.fn()
    const { getByType } = render(
      <ProductView onClose={handleCloseButtonPress} />,
    )
    fireEvent(getByType(CloseButton), 'onClose')
    expect(handleCloseButtonPress).toHaveBeenCalled()
  })
})
