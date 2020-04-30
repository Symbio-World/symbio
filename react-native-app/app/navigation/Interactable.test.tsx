import * as React from 'react'
import { render } from 'react-native-testing-library'
import { Text, StyleSheet, Dimensions } from 'react-native'

import { Interactable } from './Interactable'

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
)
import Animated, { Extrapolate } from 'react-native-reanimated'

const { width, height } = Dimensions.get('window')
const deltaX = width / 2
const α = Math.PI / 12
const A = width * Math.cos(α) + height * Math.sin(α)

describe('Interactable', () => {
  const onSnap = jest.fn()
  const x = new Animated.Value(0)
  const y = new Animated.Value(0)
  const translateX = x
  const translateY = y
  const rotateZ = Animated.concat(
    Animated.interpolate(x, {
      inputRange: [-1 * deltaX, deltaX],
      outputRange: [α, -1 * α],
      extrapolate: Extrapolate.CLAMP,
    }),
    'rad',
  )
  const style = [
    StyleSheet.absoluteFill,
    {
      transform: [{ translateX }, { translateY }, { rotateZ }],
    },
  ]

  it('renders correctly', () => {
    const { toJSON } = render(
      <Interactable
        style={style}
        snapPoints={[{ x: -1 * A }, { x: 0 }, { x: A }]}
        onSnap={onSnap}
        x={x}
        y={y}
      >
        <Text>Text</Text>
      </Interactable>,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
