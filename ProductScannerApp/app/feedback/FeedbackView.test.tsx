import React from 'react'
import { render } from 'react-native-testing-library'
import { FeedbackView } from './FeedbackView'

describe('FeedbackView', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<FeedbackView />)
    expect(toJSON()).toMatchSnapshot()
  })
})
