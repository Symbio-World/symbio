import React from 'react'
import { render } from 'react-native-testing-library'
import { Loading } from './Loading'

describe('Loading', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Loading />)
    expect(toJSON()).toMatchSnapshot()
  })
})
