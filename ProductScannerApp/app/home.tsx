import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useAuth } from './auth'
import { fetchPrinciples } from './principle'
import { Scanner } from './scanner'
import { Loading } from './ui-kit/loading'
import { SetupPrinciplesViewContainer } from './principle'

export const Home: React.FC = () => {
  const { user } = useAuth()
  const { data: principles, error, isValidating, mutate } = useSWR<
    string[] | null
  >(user ? user.id : null, fetchPrinciples)

  if (!user || (!principles && isValidating)) return <Loading />

  if (!principles) return <SetupPrinciplesViewContainer onSave={mutate} />

  return <Scanner />
}
