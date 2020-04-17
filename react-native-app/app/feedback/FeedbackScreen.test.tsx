import React from 'react'
import { render } from 'react-native-testing-library'
import { FeedbackScreen } from './FeedbackScreen'
import { FeedbackViewContainer } from './FeedbackViewContainer'

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

  it('passes title prop', () => {
    const { getByType } = render(<FeedbackScreen route={route} />)
    expect(getByType(FeedbackViewContainer).props.title).toEqual(title)
  })
})
