import 'react-native'
import React from 'react'
import { render } from 'react-native-testing-library'
import { FeedbackView } from './feedback-view'

describe('FeedbackView', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<FeedbackView />)
    expect(toJSON()).toMatchSnapshot()
  })
})
