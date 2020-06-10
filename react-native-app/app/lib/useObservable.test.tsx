import * as React from 'react'
import { Text } from 'react-native'
import { of, throwError, Observable } from 'rxjs'
import { render, cleanup } from 'react-native-testing-library'
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

  it('handles empty observable', () => {
    const Component: React.FC<{}> = () => {
      const { data } = useObservable<string>(of())
      if (!data) return <Text>no data</Text>
      return <Text>{data}</Text>
    }
    const { getByText } = render(<Component />)
    expect(getByText('no data')).toBeDefined()
  })

  it('unsubscribes from observable', () => {
    const subscription = {
      unsubscribe: jest.fn(),
    }
    const observable = {
      subscribe: () => subscription,
    }
    const Component: React.FC<{}> = () => {
      const { data } = useObservable(
        (observable as unknown) as Observable<string>,
      )
      return <Text>{data}</Text>
    }

    render(<Component />)
    cleanup()
    expect(subscription.unsubscribe).toHaveBeenCalledTimes(1)
  })
})
