import * as React from 'react'
import { Observable } from 'rxjs'

export const useObservable = <Data = unknown, Error = unknown>(
  arg: any,
  observableCreator: (arg: any) => Observable<Data>,
) => {
  const [data, setData] = React.useState<Data>()
  const [error, setError] = React.useState<Error>()

  React.useEffect(() => {
    const subscription = observableCreator(arg).subscribe(setData, setError)
    return () => subscription.unsubscribe()
  }, [arg, observableCreator])

  return { data, error }
}
