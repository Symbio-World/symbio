import * as React from 'react'
import {
  render /*, fireEvent */,
  fireEvent,
} from 'react-native-testing-library'
import { ProductView } from './ProductView'
import { CloseButton } from '../ui-kit/CloseButton'
// import { Button } from '../ui-kit/Button'

describe('ProductView', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<ProductView />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('calls onPress', () => {
    const handleCloseButtonPress = jest.fn()
    const { getByType } = render(
      <ProductView onCloseButtonPress={handleCloseButtonPress} />,
    )
    fireEvent(getByType(CloseButton), 'onClose')
    expect(handleCloseButtonPress).toHaveBeenCalled()
  })

  //   TODO: return when onFeedbackPress used
  //   it('triggers onFeedbackPress', () => {
  //     const handleFeedbackPress = jest.fn()
  //     const { getByType } = render(
  //       <ProductView onFeedbackPress={handleFeedbackPress} />,
  //     )
  //     fireEvent.press(getByType(Button))
  //     expect(handleFeedbackPress).toHaveBeenCalledWith("Tell us what's missing")
  //   })
})
