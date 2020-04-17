import React from 'react'
import { render } from 'react-native-testing-library'
import { FeedbackScreen } from './FeedbackScreen'

describe('FeedbackScreen', () => {
  const title = 'title'
  const route: any = {
    params: {
      title,
    },
  }

  it('renders correctly', () => {
    const { toJSON } = render(<FeedbackScreen route={route} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
