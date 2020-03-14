import 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

import { Home } from './home'

// fails all test because of https://github.com/invertase/react-native-firebase/issues/2614
describe('Home', () => {
  it('renders correctly', () => {
    create(<Home />)
  })
})
