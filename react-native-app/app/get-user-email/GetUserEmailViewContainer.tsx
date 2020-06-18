import * as React from 'react'
import { GetUserEmailView } from './GetUserEmailView'
import { useAuth } from '../auth'
import { saveEmail } from './saveEmail'

type Props = {
  onSave?: () => void
  onClose?: () => void
}
export const GetUserEmailViewContainer: React.FC<Props> = ({
  onSave = () => {},
  onClose = () => {},
}) => {
  const { user, setEmail } = useAuth()

  const handleSubmit = (email: string) => {
    if (user) {
      saveEmail(user.id, email)
      setEmail(email)
      onSave()
    }
  }

  return <GetUserEmailView onSubmit={handleSubmit} onClose={onClose} />
}
