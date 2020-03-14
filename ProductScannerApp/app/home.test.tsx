import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import { Home } from './home'

it('renders correctly', () => {
  renderer.create(<Home />)
})
