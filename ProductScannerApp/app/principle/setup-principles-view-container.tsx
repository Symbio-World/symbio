import React, { useState } from 'react'
import { SetupPrinciplesView } from './setup-principles-view'
// TODO move this into deps
import { useAuth } from '../auth'

type Props = {
  onSave?: () => void
}

type Deps = {
  savePrinciples: (userId: string, principles: string[]) => Promise<void>
  principles: string[]
}

type CreateSetupPrinciplesViewContainer = (deps: Deps) => React.FC<Props>

export const createSetupPrinciplesViewContainer: CreateSetupPrinciplesViewContainer = ({
  savePrinciples,
  principles,
}) => ({ onSave = () => {} }) => {
  const { user } = useAuth()

  const [selectedPrinciples, setSelectedPrinciples] = useState<string[]>([])

  const onPrinciplePress = (principle: string) =>
    selectedPrinciples.includes(principle)
      ? setSelectedPrinciples(principles.filter(t => t !== principle))
      : setSelectedPrinciples([principle, ...selectedPrinciples])
  const handleSubmit = () => {
    savePrinciples(user!.id, selectedPrinciples)
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
