import * as React from 'react'
import { Observable } from 'rxjs'

export const useObservable = <Data = unknown, Error = unknown>(
  observable: Observable<Data>,
) => {
  const [data, setData] = React.useState<Data>()
  const [error, setError] = React.useState<Error>()

  React.useEffect(() => {
    const subscription = observable.subscribe(setData, setError)
    return () => subscription.unsubscribe()
  }, [observable])

  return { data, error }
}
