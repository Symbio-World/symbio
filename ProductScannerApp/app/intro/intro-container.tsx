import React, { useState, useEffect } from 'react'
import { useAsync } from 'react-async'
import { User } from '../auth'
import { Intro } from './intro'

type Props = {
  user: User
  onStore?: () => void
}

type Deps = {
  storeUserTags: (user: User, tags: string[]) => Promise<void>
  tags: string[]
}

type CreateIntroContainer = (deps: Deps) => React.FC<Props>

export const createIntroContainer: CreateIntroContainer = ({
  storeUserTags,
  tags,
}) => ({ user, onStore = () => {} }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const { isPending, error, run } = useAsync<void>({
    deferFn: ([user, tags]) => storeUserTags(user, tags),
  })

  const onTagPress = (tag: string) =>
    selectedTags.includes(tag)
      ? setSelectedTags(tags.filter(t => t !== tag))
      : setSelectedTags([tag, ...selectedTags])
  const handleSubmit = () => {
    run(user, selectedTags)
    onStore()
  }

  return (
    <Intro
      selectedTags={selectedTags}
      tags={tags}
      onTagPress={onTagPress}
      onSubmit={handleSubmit}
    />
  )
}
