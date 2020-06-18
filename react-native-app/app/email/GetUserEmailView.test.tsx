import * as React from 'react'
import { TextInput, Keyboard } from 'react-native'
import { render, fireEvent } from 'react-native-testing-library'

import { GetUserEmailView } from './GetUserEmailView'

jest.mock('react-native/Libraries/Components/Keyboard/Keyboard', () => ({
  addListener: jest.fn(),
  dismiss: jest.fn(),
}))

describe('GetUserEmailView', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<GetUserEmailView />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('triggers onSubmit', () => {
    const email = 'test@example.com'
    const handleSubmit = jest.fn()
    const { getByType, getByText } = render(
      <GetUserEmailView onSubmit={handleSubmit} />,
    )
    fireEvent.changeText(getByType(TextInput), email)
    fireEvent.press(getByText('send'))
    expect(handleSubmit).toHaveBeenCalledWith(email)
  })

  it('triggers keyboard dissmiss', () => {
    const email = 'test@example.com'
    const handleSubmit = jest.fn()
    const { getByType, getByText } = render(
      <GetUserEmailView onSubmit={handleSubmit} />,
    )
    fireEvent.changeText(getByType(TextInput), email)
    fireEvent.press(getByText('send'))
    expect(Keyboard.dismiss).toHaveBeenCalled()
  })

  it('triggers onClose', () => {
    const handleClose = jest.fn()
    const { getByText } = render(<GetUserEmailView onClose={handleClose} />)
    fireEvent.press(getByText('close'))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})
