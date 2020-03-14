import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { Text, TouchableWithoutFeedback } from 'react-native'
import { Overlay } from './overlay'

describe('Overlay', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Overlay>
          <Text>test</Text>
        </Overlay>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('triggers onDismiss', () => {
    const testOnDismiss = jest.fn()
    const testRenderer = renderer.create(<Overlay onDismiss={testOnDismiss} />)
    const testInstance = testRenderer.root
    const backdrop = testInstance.findByType(TouchableWithoutFeedback)
    backdrop.props.onPress()
    expect(testOnDismiss.mock.calls.length).toBe(1)
  })
})
