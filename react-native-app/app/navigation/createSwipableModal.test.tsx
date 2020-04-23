import * as React from 'react'
import { render } from 'react-native-testing-library'
import { View, Text } from 'react-native'

import { createSwipableModal } from './createSwipableModal'

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
)

describe('createSwipableModal', () => {
  const navigation: any = {
    goBack: jest.fn(),
  }
  const SwipableModal = createSwipableModal(() => (
    <View>
      <Text>Test</Text>
    </View>
  ))
  it('renders correctly', () => {
    const { toJSON } = render(<SwipableModal navigation={navigation} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
