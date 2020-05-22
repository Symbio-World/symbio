import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { TimeoutView } from './TimeoutView'
import { Button } from './Button'

describe('TimeoutView', () => {
  it('renders correctly', () => {
    const handleRetry = jest.fn()
    const { toJSON } = render(<TimeoutView onRetry={handleRetry} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('triggers onRetry prop', () => {
    const handleRetry = jest.fn()
    const { getByType } = render(<TimeoutView onRetry={handleRetry} />)
    fireEvent(getByType(Button), 'onPress')
    expect(handleRetry).toBeCalledTimes(1)
  })
})
