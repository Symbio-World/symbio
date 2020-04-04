import React, { useState } from 'react'
import { SetupPrinciplesView } from './SetupPrinciplesView'
import { useAuth } from '../auth'

type CreateSetupPrinciplesViewContainer = (deps: Deps) => React.FC<Props>
type Deps = {
  savePrinciples: (userId: string, principles: string[]) => Promise<void>
  principles: string[]
}
export type OnSave = () => void
type Props = {
  onSave?: () => void
}

export const createSetupPrinciplesViewContainer: CreateSetupPrinciplesViewContainer = ({
  savePrinciples,
  principles,
}) => ({ onSave = () => {} }) => {
  const { user } = useAuth()

  const [selectedPrinciples, setSelectedPrinciples] = useState<string[]>([])

  const onPrinciplePress = (principle: string) =>
    selectedPrinciples.includes(principle)
      ? setSelectedPrinciples(principles.filter((t) => t !== principle))
      : setSelectedPrinciples([principle, ...selectedPrinciples])
  const handleSubmit = () => {
    if (!user) {
      throw new Error('This should never happen, as user is in the context')
    }
    savePrinciples(user.id, selectedPrinciples)
    onSave()
  }

  return (
    <SetupPrinciplesView
      selectedPrinciples={selectedPrinciples}
      principles={principles}
      onPrinciplePress={onPrinciplePress}
      onSubmit={handleSubmit}
    />
  )
}
