import React, { useEffect, useState, useContext } from 'react'

export type User = {
  uid: string
}

type AuthContext = {
  user?: User
}

const authContext = React.createContext<AuthContext>({})

type Props = {
  children: React.ReactNode
}

type Deps = {
  signInAnonymously: () => Promise<{ user: User }>
}

type CreateAuthProvider = (deps: Deps) => React.FC<Props>

export const createAuthProvider: CreateAuthProvider = ({
  signInAnonymously
}) => ({ children }: Props) => {
  const [user, setUser] = useState<User>()

  const authenticate = async () => {
    console.log('signInAnonymously', signInAnonymously)
    const { user } = await signInAnonymously()
    console.log('user', user)
    setUser(user)
  }

  useEffect(() => {
    authenticate()
  }, [])

  console.log('user', user)
  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  )
}

export const useAuth = () => useContext(authContext)
