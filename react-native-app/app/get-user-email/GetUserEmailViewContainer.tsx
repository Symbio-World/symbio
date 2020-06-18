import * as React from 'react'
import { GetUserEmailView } from './GetUserEmailView'
import { useAuth } from '../auth'
import { saveEmail } from './saveEmail'

type Props = {
  onSave?: () => void
}
export const GetUserEmailViewContainer: React.FC<Props> = ({
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

  return <GetUserEmailView onSubmit={handleSubmit} />
}
