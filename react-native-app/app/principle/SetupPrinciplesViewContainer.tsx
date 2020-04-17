import React from 'react'
import { SetupPrinciplesView } from './SetupPrinciplesView'
import { useAuth } from '../auth'
import { savePrinciples } from './savePrinciples'
import { getAllPrinciples } from './getAllPrinciples'

const principles = getAllPrinciples()

export type OnSave = () => void
type Props = {
  onSave?: () => void
}

export const SetupPrinciplesViewContainer: React.FC<Props> = ({
  onSave = () => {},
}) => {
  const { user } = useAuth()

  const handleSubmit = (selectedPrinciples: string[]) => {
    if (!user) {
      throw new Error('This should never happen, as user is in the context')
    }
    savePrinciples(user.id, selectedPrinciples)
    onSave()
  }

  return <SetupPrinciplesView principles={principles} onSubmit={handleSubmit} />
}
