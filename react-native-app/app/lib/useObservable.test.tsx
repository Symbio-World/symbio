import * as React from 'react'
import { Text } from 'react-native'
import { of, throwError } from 'rxjs'
import { render } from 'react-native-testing-library'
import { useObservable } from './useObservable'

describe('useObservable', () => {
  it('returns data', () => {
    const testData = 'data'
    const Component: React.FC<{}> = () => {
      const { data } = useObservable(of(testData))
      return <Text>{data}</Text>
    }
    const { getByText } = render(<Component />)
    expect(getByText(testData)).toBeDefined()
  })

  it('returns error', () => {
    const testError = 'error'
    const Component: React.FC<{}> = () => {
      const { error } = useObservable<string, string>(throwError(testError))
      return <Text>{error}</Text>
    }
    const { getByText } = render(<Component />)
    expect(getByText(testError)).toBeDefined()
  })
})
