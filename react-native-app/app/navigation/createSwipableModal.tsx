import * as React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { Dimensions, View, StyleSheet } from 'react-native'
import { t } from 'react-native-tailwindcss'
import Animated from 'react-native-reanimated'

import { Interactable } from '../navigation/Interactable'
import { ModalCard } from './ModalCard'

import { ModalStackParamList } from './Navigation'

const { Value, interpolate, concat, Extrapolate } = Animated
const { width, height } = Dimensions.get('window')
const deltaX = width / 2
const α = Math.PI / 12
const A = width * Math.cos(α) + height * Math.sin(α)

type SwipableModalProps = {
  onSnap: (e: { nativeEvent: { x: number } }) => void
}

const SwipableModal: React.FC<SwipableModalProps> = ({ children, onSnap }) => {
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
type NavigationProps = {
  navigation: StackNavigationProp<ModalStackParamList>
}

type CreateSwipableModal = <Props extends NavigationProps>(
  WrapperCompponent: React.FC<Props>,
) => React.FC<Props>

/* eslint-disable @typescript-eslint/naming-convention */
export const createSwipableModal: CreateSwipableModal = (WrapperCompponent) => {
  /* eslint-enable @typescript-eslint/naming-convention */
  return (props) => {
    const handleSnap = ({
      nativeEvent: { x },
    }: {
      nativeEvent: { x: number }
    }) => {
      if (x !== 0) {
        props.navigation.goBack()
      }
    }

    return (
      <SwipableModal onSnap={handleSnap}>
        <View style={[t.hFull]}>
          <WrapperCompponent {...props} />
        </View>
      </SwipableModal>
    )
  }
}
