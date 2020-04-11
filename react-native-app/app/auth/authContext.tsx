import React, { useContext } from 'react'
import useSWR from 'swr'

export type User = {
  id: string
}

type AuthContext = {
  user?: User
}

const authContext = React.createContext<AuthContext>({})

type Props = {
  children: React.ReactNode
}
export type SignInAnonymously = () => Promise<User>
export type Deps = {
  signInAnonymously: SignInAnonymously
}
type CreateAuthProvider = (deps: Deps) => React.FC<Props>
export const createAuthProvider: CreateAuthProvider = ({
  signInAnonymously,
}) => ({ children }: Props) => {
  const { data: user } = useSWR<User>('user', signInAnonymously)
  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  )
}

export const useAuth = (): AuthContext => useContext(authContext)
