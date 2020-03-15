import React, { useState } from 'react'
import { useAsync } from 'react-async'
import { User } from '../auth'
import { Intro } from './intro'

type Props = {
  user: User
}

type Deps = {
  storeUserTags: (user: User, tags: string[]) => Promise<void>
  tags: string[]
}

type CreateIntroContainer = (deps: Deps) => React.FC<Props>

export const createIntroContainer: CreateIntroContainer = ({
  storeUserTags,
  tags,
}) => ({ user }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const { isPending, error, run } = useAsync<void>({
    deferFn: ([user, tags]) => storeUserTags(user, tags),
  })

  const onTagPress = (tag: string) =>
    selectedTags.includes(tag)
      ? setSelectedTags(tags.filter(t => t !== tag))
      : setSelectedTags([tag, ...selectedTags])
  const onSubmit = () => run(user, selectedTags)

  return (
    <Intro
      selectedTags={selectedTags}
      tags={tags}
      onTagPress={onTagPress}
      onSubmit={onSubmit}
    />
  )
}
