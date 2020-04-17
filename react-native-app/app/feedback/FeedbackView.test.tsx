import * as React from 'react'
import { TextInput } from 'react-native'
import { Button } from '../ui-kit/Button'
import { render, fireEvent } from 'react-native-testing-library'
import { FeedbackView } from './FeedbackView'

describe('FeedbackView', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<FeedbackView />)
    expect(toJSON()).toMatchSnapshot()
  }),
    it('triggers onSubmit', () => {
      const feedback = 'feedback'
      const handleSubmit = jest.fn()
      const { getByType } = render(<FeedbackView onSubmit={handleSubmit} />)
      fireEvent.changeText(getByType(TextInput), feedback)
      fireEvent.press(getByType(Button))
      expect(handleSubmit).toHaveBeenCalledWith(feedback)
    })
})
