import React, { useState, useEffect } from 'react'
import { useAsync } from 'react-async'
import { SetupTagsScreen } from './setup-tags-screen'

type Props = {
  userId: string
  onStore?: () => void
}

type Deps = {
  saveTags: (userId: string, tags: string[]) => Promise<void>
  tags: string[]
}

type CreateSetupTagsScreenContainer = (deps: Deps) => React.FC<Props>

export const createSetupTagsScreenContainer: CreateSetupTagsScreenContainer = ({
  saveTags,
  tags,
}) => ({ userId, onStore = () => {} }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const { isPending, error, run } = useAsync<void>({
    deferFn: ([user, tags]) => saveTags(userId, tags),
  })

  const onTagPress = (tag: string) =>
    selectedTags.includes(tag)
      ? setSelectedTags(tags.filter(t => t !== tag))
      : setSelectedTags([tag, ...selectedTags])
  const handleSubmit = () => {
    run(userId, selectedTags)
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
