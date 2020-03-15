import React from 'react'
import { useAuth } from './auth/auth-context'
import { Scanner } from './scanner'
import { Loading } from './ui-kit/loading'
import { IntroContainer } from './intro'

export const Home: React.FC = () => {
  const { user } = useAuth()

  return user ? <IntroContainer user={user} /> : <Loading />
}
