import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { Text, TouchableWithoutFeedback } from 'react-native'
import { Overlay } from './overlay'

describe('Overlay', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
        <Overlay>
          <Text>test</Text>
        </Overlay>,
      )
    expect(toJSON()).toMatchSnapshot()
  })

  it('triggers onDismiss', () => {
    const handleDismiss = jest.fn()
    const { getByType } = render(<Overlay onDismiss={handleDismiss} />)
    fireEvent.press(getByType(TouchableWithoutFeedback))
    expect(handleDismiss.mock.calls.length).toBe(1)
  })
})
