import * as React from 'react'
import { FetchEmail } from './fetchEmail'

export type User = {
  id: string
  email?: string
}

type AuthContext = {
  user?: User
  setEmail: (email: string) => void
}

const authContext = React.createContext<AuthContext>({
  setEmail: () => {},
})

type Props = {
  children: React.ReactNode
}
export type SignInAnonymously = () => Promise<User>
export type Deps = {
  signInAnonymously: SignInAnonymously
  fetchEmail: FetchEmail
}
type CreateAuthProvider = (deps: Deps) => React.FC<Props>
export const createAuthProvider: CreateAuthProvider = ({
  signInAnonymously,
  fetchEmail,
}) => ({ children }: Props) => {
  const [user, setUser] = React.useState<User>()

  React.useEffect(() => {
    signInAnonymously().then((user) => {
      fetchEmail(user.id).then((email) => {
        if (email) {
          setUser({ ...user, email })
        } else {
          setUser(user)
        }
      })
    })
  }, [signInAnonymously, fetchEmail])

  const setEmail = (email: string) => {
    if (user) {
      setUser({ ...user, email })
    }
  }

  return (
    <authContext.Provider value={{ user, setEmail }}>
      {children}
    </authContext.Provider>
  )
}

export const useAuth = (): AuthContext => React.useContext(authContext)
