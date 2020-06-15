import * as React from 'react'
import { render } from 'react-native-testing-library'
import { ErrorViewContainer } from './ErrorViewContainer'

describe('ErrorViewContainer', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<ErrorViewContainer />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('test with error', () => {
    const error = new Error('Some error')
    const { toJSON } = render(<ErrorViewContainer error={error} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
