import 'react-native'
import React from 'react'
import { render } from 'react-native-testing-library'
import { Loading } from './loading'

describe('Loading', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Loading />)
    expect(toJSON()).toMatchSnapshot()
  })
})
