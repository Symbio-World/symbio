import 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

import { Home } from './home'

describe('Home', () => {
  it('renders correctly', () => {
    create(<Home />)
  })
})
