import * as React from 'react'
import { render } from 'react-native-testing-library'
import { ErrorViewContainer } from './ErrorViewContainer'

jest.mock('../error-handler/saveError')

import { saveError } from '../error-handler/saveError'

describe('ErrorViewContainer', () => {
  beforeEach(() => {
    ;(saveError as jest.Mock).mockImplementation(() => Promise.resolve())
  })
  it('renders correctly', () => {
    const { toJSON } = render(<ErrorViewContainer />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('test with error', () => {
    const error = new Error('Some error')
    render(<ErrorViewContainer error={error} />)
    expect(saveError).toHaveBeenCalledWith(error.message)
  })
})
