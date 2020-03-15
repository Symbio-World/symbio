import React, { useEffect, useState } from 'react'
import { useAsync } from 'react-async'
import { useAuth } from './auth'
import { fetchTags } from './tag'
import { Scanner } from './scanner'
import { Loading } from './ui-kit/loading'
import { SetupTagsScreenContainer } from './tag'

export const Home: React.FC = () => {
  const { user } = useAuth()
  const [tags, setTags] = useState<string[]>()

  const getTags = async () => {
    console.log(user)
    if (user) {
      const tags = await fetchTags(user.id)
      console.log(tags)
      setTags(tags)
    }
  }
  useEffect(() => {
    getTags()
  }, [user])

  if (!user) return <Loading />

  if (!tags) return (
    <SetupTagsScreenContainer
      userId={user.id}
      onStore={getTags}
    />
  )

  return <Scanner />
}
