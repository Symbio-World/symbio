import * as React from 'react'
import { TextInput, Keyboard } from 'react-native'
import { Button } from '../ui-kit/Button'
import { render, fireEvent } from 'react-native-testing-library'

import { FeedbackView } from './FeedbackView'

jest.mock('react-native/Libraries/Components/Keyboard/Keyboard', () => ({
  addListener: jest.fn(),
  dismiss: jest.fn(),
}))

describe('FeedbackView', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<FeedbackView />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('triggers onSubmit', () => {
    const feedback = 'feedback'
    const handleSubmit = jest.fn()
    const { getByType } = render(<FeedbackView onSubmit={handleSubmit} />)
    fireEvent.changeText(getByType(TextInput), feedback)
    fireEvent.press(getByType(Button))
    expect(handleSubmit).toHaveBeenCalledWith(feedback)
  })

  it('triggers keyboard dissmiss', () => {
    const feedback = 'feedback'
    const handleSubmit = jest.fn()
    const { getByType } = render(<FeedbackView onSubmit={handleSubmit} />)
    fireEvent.changeText(getByType(TextInput), feedback)
    fireEvent.press(getByType(Button))
    expect(Keyboard.dismiss).toHaveBeenCalled()
  })
})
