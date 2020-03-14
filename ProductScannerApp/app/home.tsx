import React from 'react'
import { useAuth } from './auth/auth-context'
import { Scanner } from './scanner'
import { Loading } from './ui-kit/loading'

export const Home = () => {
  const { user } = useAuth()

  return user ? <Scanner /> : <Loading />
}
