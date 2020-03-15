import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useAuth } from './auth'
import { fetchTags } from './tag'
import { Scanner } from './scanner'
import { Loading } from './ui-kit/loading'
import { SetupTagsViewContainer } from './tag'

export const Home: React.FC = () => {
  const { user } = useAuth()
  const { data: tags, error, isValidating, mutate } = useSWR<string[] | null>(user ? user.id : null, fetchTags)

  if (!user || (!tags && isValidating)) return <Loading />

  if (!tags) return (
    <SetupTagsViewContainer
      userId={user.id}
      onStore={mutate}
    />
  )

  return <Scanner />
}
