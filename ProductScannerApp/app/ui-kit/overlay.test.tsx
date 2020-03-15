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
    const testOnDismiss = jest.fn()
    const { getByType } = render(<Overlay onDismiss={testOnDismiss} />)
    fireEvent.press(getByType(TouchableWithoutFeedback))
    expect(testOnDismiss.mock.calls.length).toBe(1)
  })
})
