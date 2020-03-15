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
    const { user } = await signInAnonymously()
    setUser(user)
  }

  useEffect(() => {
    authenticate()
  }, [])

  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  )
}

export const useAuth = () => useContext(authContext)
