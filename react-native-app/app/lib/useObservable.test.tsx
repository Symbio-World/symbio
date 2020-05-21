import * as React from 'react'
import { Text } from 'react-native'
import { of, throwError } from 'rxjs'
import { render } from 'react-native-testing-library'
import { useObservable } from './useObservable'

describe('useObservable', () => {
  it('returns data', () => {
    const testData = 'data'
    const observableCreator = () => of(testData)
    const Component: React.FC<{}> = () => {
      const { data } = useObservable('arg', observableCreator)
      return <Text>{data}</Text>
    }
    const { getByText } = render(<Component />)
    expect(getByText(testData)).toBeDefined()
  })

  it('calls observableCreator with an arg', () => {
    const testArg = 'arg'
    const observableCreator = jest.fn(() => of('data'))
    const Component: React.FC<{}> = () => {
      const { data } = useObservable(testArg, observableCreator)
      return <Text>{data}</Text>
    }
    render(<Component />)
    expect(observableCreator).toBeCalledWith(testArg)
  })

  it('returns error', () => {
    const testError = 'error'
    const observableCreator = (_: string) => throwError(testError)
    const Component: React.FC<{}> = () => {
      const { error } = useObservable<string, string>('arg', observableCreator)
      return <Text>{error}</Text>
    }
    const { getByText } = render(<Component />)
    expect(getByText(testError)).toBeDefined()
  })
})
