import * as React from 'react'
import { FeedbackView } from './FeedbackView'
import { useAuth } from '../auth'
import { saveFeedback } from './saveFeedback'

type Props = {
  title?: string
  onSave?: () => void
}
export const FeedbackViewContainer: React.FC<Props> = ({
  title = '',
  onSave = () => {},
}) => {
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
