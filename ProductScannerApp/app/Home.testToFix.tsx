import React from 'react'
import { render } from 'react-native-testing-library'
import { Home } from './Home'

// fails all test because of https://github.com/invertase/react-native-firebase/issues/2614
describe('Home', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Home />)
    expect(toJSON()).toMatchSnapshot()
  })
})
