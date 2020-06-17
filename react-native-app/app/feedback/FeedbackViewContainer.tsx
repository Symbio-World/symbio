import * as React from 'react'
import { FeedbackView } from './FeedbackView'
import { useAuth } from '../auth'
import { saveEmail } from './saveEmail'

type Props = {
  onSave?: () => void
}
export const FeedbackViewContainer: React.FC<Props> = ({
  onSave = () => {},
}) => {
  const { user } = useAuth()

  const handleSubmit = (email: string) => {
    if (!user) {
      throw new Error('This should never happen, as user is in the context')
    }
    saveEmail(user.id, email)
    onSave()
  }

  return <FeedbackView onSubmit={handleSubmit} />
}
