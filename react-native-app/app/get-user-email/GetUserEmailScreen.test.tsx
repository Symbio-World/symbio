import * as React from 'react'
import { render } from 'react-native-testing-library'
import { GetUserEmailScreen } from './GetUserEmailScreen'

describe('GetUserEmailScreen', () => {
  const navigation: any = {}
  const route: any = {
    params: {},
  }

  it('renders correctly', () => {
    const { toJSON } = render(
      <GetUserEmailScreen route={route} navigation={navigation} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
