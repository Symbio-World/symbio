import * as React from 'react'
import { Observable } from 'rxjs'

export const useObservable = <Key, Data, Error>(
  key: Key,
  observableCreator: (key: Key) => Observable<Data>,
) => {
  const [data, setData] = React.useState<Data>()
  const [error, setError] = React.useState<Error>()

  React.useEffect(() => {
    const subscription = observableCreator(key).subscribe(setData, setError)
    return () => subscription.unsubscribe()
  }, [key, observableCreator])

  return { data, error }
}
