import * as React from 'react'
import { of, throwError } from 'rxjs'
import { Text } from 'react-native'
import { render } from 'react-native-testing-library'
import { DataObserver } from './DataObserver'
import { ErrorView } from '../ui-kit/ErrorView'

jest.useFakeTimers()

describe('DataObserver', () => {
  it('calls observableCreator with arg', () => {
    const testArg = 'arg'
    const observableCreator = jest.fn(() => of('data'))
    render(
      <DataObserver
        arg={testArg}
        observableCreator={observableCreator}
        renderSuccess={(data) => <Text>{data}</Text>}
      />,
    )
    expect(observableCreator).toHaveBeenCalledWith(testArg)
  })

  it('renders success case', () => {
    const testData = 'data'
    const { getByText } = render(
      <DataObserver
        arg="arg"
        observableCreator={() => of(testData)}
        renderSuccess={(data) => <Text>{data}</Text>}
      />,
    )
    expect(getByText(testData)).toBeDefined()
  })

  it('renders default error', () => {
    const testError = 'error'
    const { getByType } = render(
      <DataObserver
        arg="arg"
        observableCreator={() => throwError(testError)}
        renderSuccess={(data) => <Text>{data}</Text>}
      />,
    )
    const errorView = getByType(ErrorView)
    expect(errorView).toBeDefined()
    expect(errorView.props.error).toEqual(testError)
  })

  it('renders custom error', () => {
    const testError = 'error'
    const CustomErrorView = ({ error }: any) => <Text>{error}</Text>
    const { getByType } = render(
      <DataObserver
        arg="arg"
        observableCreator={() => throwError(testError)}
        renderSuccess={(data) => <Text>{data}</Text>}
        renderError={(e) => <CustomErrorView error={e} />}
      />,
    )
    const customErrorView = getByType(CustomErrorView)
    expect(customErrorView).toBeDefined()
    expect(customErrorView.props.error).toEqual(testError)
  })

  it('renders default timeout', () => {
    const { getByType } = render(
      <DataObserver
        arg="arg"
        observableCreator={() => of()}
        renderSuccess={(data) => <Text>{data}</Text>}
      />,
    )

    jest.runAllTimers()

    const errorView = getByType(ErrorView)
    expect(errorView).toBeDefined()
    expect(errorView.props.error).toEqual('request has timed out')
  })

  it('renders custom timeout', () => {
    const CustomTimeoutView = () => <Text>timeout</Text>
    const { getByType } = render(
      <DataObserver
        arg="arg"
        observableCreator={() => of()}
        renderSuccess={(data) => <Text>{data}</Text>}
        renderTimeout={() => <CustomTimeoutView />}
      />,
    )

    jest.runAllTimers()

    expect(getByType(CustomTimeoutView)).toBeDefined()
  })
})
