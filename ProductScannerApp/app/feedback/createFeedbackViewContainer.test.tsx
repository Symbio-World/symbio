import React from 'react'
import { TextInput } from 'react-native'
import { render, fireEvent } from 'react-native-testing-library'
import { createFeedbackViewContainer } from './createFeedbackViewContainer'
import { Button } from '../ui-kit/Button'
import { useAuth } from '../auth'

jest.mock('../auth')

describe('createFeedbackViewContainer', () => {
  const user = { id: 'id' }

  beforeEach(() => {
    ;(useAuth as jest.Mock).mockImplementation(() => ({ user }))
  })

  it('renders correctly', () => {
    const FeedbackViewContainer = createFeedbackViewContainer({
      saveFeedback: jest.fn(),
    })
    const { toJSON } = render(<FeedbackViewContainer title="Test" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('saves feedback', () => {
    const saveFeedback = jest.fn()
    const feedback = 'feedback'
    const FeedbackViewContainer = createFeedbackViewContainer({
      saveFeedback,
    })
    const feedbackViewContainer = <FeedbackViewContainer />
    const { getByType } = render(feedbackViewContainer)
    fireEvent.changeText(getByType(TextInput), feedback)
    fireEvent.press(getByType(Button))
    expect(saveFeedback).toHaveBeenCalledWith(user.id, feedback)
  })

  it('triggers onSave if stored', () => {
    const handleSave = jest.fn()
    const FeedbackViewContainer = createFeedbackViewContainer({
      saveFeedback: jest.fn(() => Promise.resolve()),
    })
    const feedbackViewContainer = <FeedbackViewContainer onSave={handleSave} />
    const { getByType } = render(feedbackViewContainer)
    fireEvent.press(getByType(Button))
    expect(handleSave).toHaveBeenCalled()
  })
})
