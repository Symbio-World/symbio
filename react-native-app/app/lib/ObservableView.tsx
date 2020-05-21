import * as React from 'react'
import { Observable } from 'rxjs'
import { ErrorView } from '../ui-kit/ErrorView'
import { Loading } from '../ui-kit/Loading'
import { Timeout } from './Timeout'
import { useObservable } from './useObservable'

type Props = {
  observable: Observable<any>
  renderSuccess: (data: any) => React.ReactElement
  timeoutDuration?: number
  renderTimeout?: () => React.ReactElement
  renderError?: (error: any) => React.ReactElement
}
export const ObservableView: React.FC<Props> = ({
  observable,
  renderSuccess,
  timeoutDuration = 5000,
  renderTimeout = () => <ErrorView error="request has timed out" />,
  renderError = (error) => <ErrorView error={error} />,
}) => {
  const { data, error } = useObservable(observable)
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
