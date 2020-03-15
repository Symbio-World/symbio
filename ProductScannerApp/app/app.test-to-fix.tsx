import 'react-native'
import React from 'react'
import { render } from 'react-native-testing-library'
import { App } from './app'

// fails all test because of https://github.com/invertase/react-native-firebase/issues/2614
describe('App', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<App />)
    expect(toJSON()).toMatchSnapshot()
  })
})
