import * as React from 'react'

type Props = {
  durationInSeconds: number
  onTimeout: () => void
  children: React.ReactElement
}
export const Timeout: React.FC<Props> = ({
  durationInSeconds,
  onTimeout,
  children,
}) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout()
    }, durationInSeconds)
    return () => clearTimeout(timer)
  }, [onTimeout, durationInSeconds])

  return children
}
