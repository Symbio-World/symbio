import React, { useState } from 'react'
import { useAsync } from 'react-async'
import { User } from '../auth'
import { Intro } from './intro'

type Props = {
  user: User
}

type Deps = {
  storeUserTags: (user: User, tags: string[]) => Promise<void>
}

type CreateIntroContainer = (deps: Deps) => React.FC<Props>

export const createIntroContainer: CreateIntroContainer = ({
  storeUserTags,
}) => ({ user }) => {
  const [tags, setTags] = useState<string[]>([])
  const { isPending, error, run } = useAsync<void>({
    deferFn: ([user, tags]) => storeUserTags(user, tags),
  })

  const onTagPress = (tag: string) => setTags([tag, ...tags])
  const onSubmit = () => run(user, tags)

  return (
    <Intro
      tags={[
        'Vegan',
        'Gluten free',
        'Nut free',
        'Lactose free',
        'Halal',
        'Organic',
        'Eco friendly',
      ]}
      onTagPress={onTagPress}
      onSubmit={onSubmit}
    />
  )
}
