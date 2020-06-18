import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { GetUserEmailScreen } from './GetUserEmailScreen'
import { GetUserEmailViewContainer } from './GetUserEmailViewContainer'

describe('GetUserEmailScreen', () => {
  let navigation: any = {}
  const route: any = {
    params: {},
  }

  it('renders correctly', () => {
    const { toJSON } = render(
      <GetUserEmailScreen route={route} navigation={navigation} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('pops the route on save', () => {
    navigation = { pop: jest.fn() }
    const { getByType } = render(
      <GetUserEmailScreen route={route} navigation={navigation} />,
    )
    fireEvent(getByType(GetUserEmailViewContainer), 'onSave')
    expect(navigation.pop).toHaveBeenCalledTimes(1)
  })
})
