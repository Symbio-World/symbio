import 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

import { Intro } from './intro'

describe('Intro', () => {
  it('renders correctly', () => {
    const tree = create(<Intro />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
