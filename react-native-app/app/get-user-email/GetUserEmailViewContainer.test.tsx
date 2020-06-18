import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { useAuth } from '../auth'
import { GetUserEmailViewContainer } from './GetUserEmailViewContainer'
import { GetUserEmailView } from './GetUserEmailView'
import { saveEmail } from './saveEmail'

jest.mock('../auth')
jest.mock('./saveEmail')

describe('GetUserEmailViewContainer', () => {
  const user = { id: 'id' }
  let setEmail: (email: string) => void

  beforeEach(() => {
    setEmail = jest.fn()
    ;(useAuth as jest.Mock).mockImplementation(() => ({ user, setEmail }))
    ;(saveEmail as jest.Mock).mockImplementation(() => Promise.resolve())
  })

  it('renders correctly', () => {
    const { toJSON } = render(<GetUserEmailViewContainer />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('saves email', () => {
    const email = 'test@example.com'
    const { getByType } = render(<GetUserEmailViewContainer />)
    fireEvent(getByType(GetUserEmailView), 'onSubmit', email)
    expect(saveEmail).toHaveBeenCalledWith(user.id, email)
  })

  it('sets email', () => {
    const email = 'test@example.com'
    const { getByType } = render(<GetUserEmailViewContainer />)
    fireEvent(getByType(GetUserEmailView), 'onSubmit', email)
    expect(setEmail).toHaveBeenCalledWith(email)
  })

  it('triggers onSave callback', () => {
    const handleSave = jest.fn()
    const { getByType } = render(
      <GetUserEmailViewContainer onSave={handleSave} />,
    )
    fireEvent(getByType(GetUserEmailView), 'onSubmit', 'test@example.com')
    expect(handleSave).toHaveBeenCalledTimes(1)
  })

  it('triggers onClose callback', () => {
    const handleClose = jest.fn()
    const { getByType } = render(
      <GetUserEmailViewContainer onClose={handleClose} />,
    )
    fireEvent(getByType(GetUserEmailView), 'onClose')
    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})
