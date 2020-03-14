import 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

import { App } from './app'

// fails all test because of https://github.com/invertase/react-native-firebase/issues/2614
describe('App', () => {
  it('renders correctly', () => {
    create(<App />)
  })
})
