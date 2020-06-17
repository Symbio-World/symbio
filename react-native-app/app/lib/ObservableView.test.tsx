import * as React from 'react'
import { of, throwError } from 'rxjs'
import { Text } from 'react-native'
import { render } from 'react-native-testing-library'
import { ObservableView } from './ObservableView'
import { ErrorViewContainer } from '../error-handler/ErrorViewContainer'
import { TimeoutView } from '../ui-kit/TimeoutView'

jest.useFakeTimers()

describe('ObservableView', () => {
  it('renders success case', () => {
    const testData = 'data'
    const { getByText } = render(
      <ObservableView
        observable={of(testData)}
        renderSuccess={(data) => <Text>{data}</Text>}
      />,
    )
    expect(getByText(testData)).toBeDefined()
  })

  it('renders default error', () => {
    const testError = 'error'
    const { getByType } = render(
      <ObservableView
        observable={throwError(testError)}
        renderSuccess={(data) => <Text>{data}</Text>}
      />,
    )
    const errorView = getByType(ErrorViewContainer)
    expect(errorView).toBeDefined()
    expect(errorView.props.error).toEqual(testError)
  })

  it('renders custom error', () => {
    const testError = 'error'
    const CustomErrorView = ({ error }: any) => <Text>{error}</Text>
    const { getByType } = render(
      <ObservableView
        observable={throwError(testError)}
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
      <ObservableView
        observable={of()}
        renderSuccess={(data) => <Text>{data}</Text>}
      />,
    )

    jest.runAllTimers()

    expect(getByType(TimeoutView)).toBeDefined()
  })

  it('renders custom timeout', () => {
    const CustomTimeoutView = () => <Text>timeout</Text>
    const { getByType } = render(
      <ObservableView
        observable={of()}
        renderSuccess={(data) => <Text>{data}</Text>}
        renderTimeout={() => <CustomTimeoutView />}
      />,
    )

    jest.runAllTimers()

    expect(getByType(CustomTimeoutView)).toBeDefined()
  })
})
