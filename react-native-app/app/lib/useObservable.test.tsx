import * as React from 'react'
import { Text } from 'react-native'
import { of, throwError } from 'rxjs'
import { render } from 'react-native-testing-library'
import { useObservable } from './useObservable'

describe('useObservable', () => {
  it('returns data', () => {
    const testData = 'data'
    const observableCreator = (_: string) => of(testData)
    const Component: React.FC<{}> = () => {
      const { data } = useObservable('key', observableCreator)
      return <Text>{data}</Text>
    }
    const { getByText } = render(<Component />)
    expect(getByText(testData)).toBeDefined()
  })

  it('returns error', () => {
    const testError = 'error'
    const observableCreator = (_: string) => throwError(testError)
    const Component: React.FC<{}> = () => {
      const { error } = useObservable('key', observableCreator)
      return <Text>{error as string}</Text>
    }
    const { getByText } = render(<Component />)
    expect(getByText(testError)).toBeDefined()
  })
})
