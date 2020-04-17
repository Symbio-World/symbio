import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { useAuth } from '../auth'
import { FeedbackViewContainer } from './FeedbackViewContainer'
import { FeedbackView } from './FeedbackView'
import { saveFeedback } from './saveFeedback'

jest.mock('../auth')
jest.mock('./saveFeedback')

describe('FeedbackViewContainer', () => {
  const user = { id: 'id' }

  beforeEach(() => {
    ;(useAuth as jest.Mock).mockImplementation(() => ({ user }))
    ;(saveFeedback as jest.Mock).mockImplementation(() => Promise.resolve())
  })

  it('renders correctly', () => {
    const { toJSON } = render(<FeedbackViewContainer />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('saves feedback', () => {
    const feedback = 'feedback'
    const { getByType } = render(<FeedbackViewContainer />)
    fireEvent(getByType(FeedbackView), 'onSubmit', feedback)
    expect(saveFeedback).toHaveBeenCalledWith(user.id, feedback)
  })

  it('triggers onSave callback', () => {
    const handleSave = jest.fn()
    const { getByType } = render(<FeedbackViewContainer onSave={handleSave} />)
    fireEvent(getByType(FeedbackView), 'onSubmit', 'feedback')
    expect(handleSave).toHaveBeenCalled()
  })
})
