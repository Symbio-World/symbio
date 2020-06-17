import * as React from 'react'
import { render } from 'react-native-testing-library'
import { FeedbackScreen } from './FeedbackScreen'

describe('FeedbackScreen', () => {
  const navigation: any = {}
  const route: any = {
    params: {},
  }

  it('renders correctly', () => {
    const { toJSON } = render(
      <FeedbackScreen route={route} navigation={navigation} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
