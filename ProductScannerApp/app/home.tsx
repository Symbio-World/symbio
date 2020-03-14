import React from 'react'
import { useAuth } from './auth/auth-context'
import { Scanner } from './scanner'
import { Loading } from './ui-kit/loading'
import { Intro } from './intro'

export const Home: React.FC = () => {
  const { user } = useAuth()

  return user ? <Intro user={user} /> : <Loading />
}
