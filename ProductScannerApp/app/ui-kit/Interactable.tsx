import * as React from 'react'
import { ViewStyle } from 'react-native'
import { spring, snapPoint } from 'react-native-redash'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

const {
  Value,
  event,
  block,
  set,
  cond,
  eq,
  Clock,
  call,
  clockRunning,
  interpolate,
} = Animated

const binaryInterpolation = (
  value: Animated.Adaptable<number>,
  origin: Animated.Adaptable<number>,
  destination: Animated.Adaptable<number>,
) =>
  interpolate(value, {
    inputRange: [0, 1],
    outputRange: [origin, destination],
  })

type Value = typeof Value

type SnapPoint = {
  x: number
}

type InteractableProps = {
  x: Animated.Value<number>
  y: Animated.Value<number>
  snapPoints: SnapPoint[]
  onSnap: (e: { nativeEvent: { x: number } }) => void
  style: ViewStyle
}

export const Interactable: React.FC<InteractableProps> = ({
  style,
  x,
  y,
  snapPoints,
  onSnap,
  children,
}) => {
  const clock = new Clock()
  const springValue = new Value(0)
  const translationX = new Value(0)
  const translationY = new Value(0)
  const velocityX = new Value(0)
  const snapPointX = new Value(0)
  const state = new Value(State.UNDETERMINED)
  const onGestureEvent = event([
    {
      nativeEvent: {
        velocityX,
        translationX,
        translationY,
        state,
      },
    },
  ])
  const points = snapPoints.map((point) => point.x)
  Animated.useCode(
    () =>
      block([
        cond(eq(state, State.END), [
          set(snapPointX, snapPoint(translationX, velocityX, points)),
          set(springValue, spring({ clock, from: 0, to: 1 })),
          cond(
            eq(clockRunning(clock), 0),
            call([snapPointX], ([lastX]) =>
              onSnap({ nativeEvent: { x: lastX } }),
            ),
          ),
        ]),
        set(
          x,
          cond(
            eq(state, State.ACTIVE),
            translationX,
            binaryInterpolation(springValue, translationX, snapPointX),
          ),
        ),
        set(
          y,
          cond(
            eq(state, State.ACTIVE),
            translationY,
            binaryInterpolation(springValue, translationY, 0),
          ),
        ),
      ]),
    [],
  )

  return (
    <PanGestureHandler
      onHandlerStateChange={onGestureEvent}
      onGestureEvent={onGestureEvent}
    >
      <Animated.View style={style}>{children}</Animated.View>
    </PanGestureHandler>
  )
}
