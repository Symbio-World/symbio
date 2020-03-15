import React, { useState } from 'react'
import { SetupTagsView } from './setup-tags-view'

type Props = {
  userId: string
  onStore?: () => void
}

type Deps = {
  saveTags: (userId: string, tags: string[]) => Promise<void>
  tags: string[]
}

type CreateSetupTagsViewContainer = (deps: Deps) => React.FC<Props>

export const createSetupTagsViewContainer: CreateSetupTagsViewContainer = ({
  saveTags,
  tags,
}) => ({ userId, onStore = () => {} }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const onTagPress = (tag: string) =>
    selectedTags.includes(tag)
      ? setSelectedTags(tags.filter(t => t !== tag))
      : setSelectedTags([tag, ...selectedTags])
  const handleSubmit = () => {
    saveTags(userId, selectedTags)
    onStore()
  }

  return (
    <SetupTagsView
      selectedTags={selectedTags}
      tags={tags}
      onTagPress={onTagPress}
      onSubmit={handleSubmit}
    />
  )
}
