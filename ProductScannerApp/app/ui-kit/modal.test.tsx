import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { Text, TouchableWithoutFeedback } from 'react-native'
import { Modal } from './modal'

describe('Modal', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
        <Modal>
          <Text>test</Text>
        </Modal>,
      )
    expect(toJSON()).toMatchSnapshot()
  })

  it('triggers onDismiss', () => {
    const handleDismiss = jest.fn()
    const { getByType } = render(<Modal onDismiss={handleDismiss} />)
    fireEvent.press(getByType(TouchableWithoutFeedback))
    expect(handleDismiss.mock.calls.length).toBe(1)
  })
})
