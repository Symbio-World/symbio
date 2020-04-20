import * as React from 'react'
import { Dimensions, View, StyleSheet } from 'react-native'
import { t } from 'react-native-tailwindcss'
import Animated from 'react-native-reanimated'

import { Interactable } from '../navigation/Interactable'
import { ModalCard } from './ModalCard'

const { Value, interpolate, concat, Extrapolate } = Animated
const { width, height } = Dimensions.get('window')
const deltaX = width / 2
const α = Math.PI / 12
const A = width * Math.cos(α) + height * Math.sin(α)

type SwipableModalProps = {
  onSnap: (e: { nativeEvent: { x: number } }) => void
}

export const SwipableModal: React.FC<SwipableModalProps> = ({
  children,
  onSnap,
}) => {
  const x = new Value(0)
  const y = new Value(0)
  const rotateZ = concat(
    interpolate(x, {
      inputRange: [-1 * deltaX, deltaX],
      outputRange: [α, -1 * α],
      extrapolate: Extrapolate.CLAMP,
    }),
    'rad',
  )

  const translateX = x
  const translateY = y

  const style = [
    StyleSheet.absoluteFill,
    {
      transform: [{ translateX }, { translateY }, { rotateZ }],
    },
  ]

  return (
    <View style={[t.flex1]}>
      <Interactable
        style={style}
        snapPoints={[{ x: -1 * A }, { x: 0 }, { x: A }]}
        onSnap={onSnap}
        x={x}
        y={y}
      >
        <ModalCard>{children}</ModalCard>
      </Interactable>
    </View>
  )
}
