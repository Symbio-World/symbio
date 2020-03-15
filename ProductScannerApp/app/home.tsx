import React from 'react'
import { useAuth } from './auth/auth-context'
import { Scanner } from './scanner'
import { Loading } from './ui-kit/loading'
import { SetupTagsScreenContainer } from './tag'

export const Home: React.FC = () => {
  const { user } = useAuth()

  return user ? (
    <SetupTagsScreenContainer user={user} onStore={() => console.log('hello')} />
  ) : (
    <Loading />
  )
}
