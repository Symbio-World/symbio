import React, { useState, useEffect } from 'react'
import { useAsync } from 'react-async'
import { User } from '../auth'
import { SetupTagsScreen } from './setup-tags-screen'

type Props = {
  user: User
  onStore?: () => void
}

type Deps = {
  storeUserTags: (user: User, tags: string[]) => Promise<void>
  tags: string[]
}

type CreateSetupTagsScreenContainer = (deps: Deps) => React.FC<Props>

export const createSetupTagsScreenContainer: CreateSetupTagsScreenContainer = ({
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
    <SetupTagsScreen
      selectedTags={selectedTags}
      tags={tags}
      onTagPress={onTagPress}
      onSubmit={handleSubmit}
    />
  )
}
