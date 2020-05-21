import * as React from 'react'
import { Observable } from 'rxjs'
import { ErrorView } from '../ui-kit/ErrorView'
import { Loading } from '../ui-kit/Loading'
import { Timeout } from './Timeout'
import { useObservable } from './useObservable'

type Arg = any
type Data = any
type Error = any
type Props = {
  arg: Arg
  observableCreator: (arg: Arg) => Observable<Data>
  renderSuccess: (data: Data) => React.ReactElement
  timeoutDuration?: number
  renderTimeout?: () => React.ReactElement
  renderError?: (error: Error) => React.ReactElement
}
export const DataObserver: React.FC<Props> = ({
  arg,
  observableCreator,
  renderSuccess,
  timeoutDuration = 5000,
  renderTimeout = () => <ErrorView error="request has timed out" />,
  renderError = (error) => <ErrorView error={error} />,
}) => {
  const { data, error } = useObservable(arg, observableCreator)
  const [hasTimedOut, setHasTimedOut] = React.useState(false)

  const handleTimeout = () => {
    setHasTimedOut(true)
  }

  if (hasTimedOut) return renderTimeout()
  if (error) return renderError(error)
  if (!data) {
    return (
      <Timeout durationInSeconds={timeoutDuration} onTimeout={handleTimeout}>
        <Loading />
      </Timeout>
    )
  }
  return renderSuccess(data)
}
