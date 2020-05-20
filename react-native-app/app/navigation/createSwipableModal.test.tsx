import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { View, Text } from 'react-native'

import { createSwipableModal, SwipableModal } from './createSwipableModal'

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
)

describe('createSwipableModal', () => {
  const navigation: any = {
    goBack: jest.fn(),
  }
  const route: any = {
    params: { shouldHideCloseButton: false },
  }
  const SwipableModalComp = createSwipableModal(() => (
    <View>
      <Text>Test</Text>
    </View>
  ))
  it('renders correctly', () => {
    const { toJSON } = render(
      <SwipableModalComp route={route} navigation={navigation} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('renders correctly without close button', () => {
    const { toJSON } = render(
      <SwipableModalComp
        route={{ params: { shouldHideCloseButton: false } }}
        navigation={navigation}
      />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('do nothing on default position', () => {
    const { getByType } = render(
      <SwipableModalComp route={route} navigation={navigation} />,
    )
    const eventData = {
      nativeEvent: {
        x: 0,
      },
    }
    fireEvent(getByType(SwipableModal), 'onSnap', eventData)
    expect(navigation.goBack).toBeCalledTimes(0)
  })

  it('call go back on snap', () => {
    const { getByType } = render(
      <SwipableModalComp route={route} navigation={navigation} />,
    )
    const eventData = {
      nativeEvent: {
        x: 2,
      },
    }
    fireEvent(getByType(SwipableModal), 'onSnap', eventData)
    expect(navigation.goBack).toBeCalled()
  })
})
