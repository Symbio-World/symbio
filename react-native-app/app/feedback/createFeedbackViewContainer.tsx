import React from 'react'
import { FeedbackView } from './FeedbackView'
import { useAuth } from '../auth'

type CreateFeedbackViewContainer = (deps: Deps) => React.FC<Props>
type Deps = {
  saveFeedback: (userId: string, feedback: string) => Promise<void>
}
type Props = {
  title?: string
  onSave?: () => void
}
export const createFeedbackViewContainer: CreateFeedbackViewContainer = ({
  saveFeedback,
}) => ({ title, onSave = () => {} }) => {
  const { user } = useAuth()

  const handleSubmit = (feedback: string) => {
    if (!user) {
      throw new Error('This should never happen, as user is in the context')
    }
    saveFeedback(user.id, feedback)
    onSave()
  }

  return <FeedbackView title={title} onSubmit={handleSubmit} />
}
