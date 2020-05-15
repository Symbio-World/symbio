import * as React from 'react'
import { render /*, fireEvent */ } from 'react-native-testing-library'
import { ProductView } from './ProductView'
// import { Button } from '../ui-kit/Button'

describe('ProductView', () => {
  it('renders correctly', () => {
    const onBackButtonPress = jest.fn()
    const { toJSON } = render(
      <ProductView onBackButtonPress={onBackButtonPress} />,
    )
    expect(toJSON()).toMatchSnapshot()
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
