import {
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack'
import { TransitionPreset } from '@react-navigation/stack/lib/typescript/src/types'
import { t } from 'react-native-tailwindcss'

export const cardStackTransition: TransitionPreset = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.95],
                })
              : 1,
          },
          {
            translateY: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -30],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    }
  },
}
export const modalCardStackScreenOptions = {
  cardOverlayEnabled: true,
  screenOptions: {
    cardStyle: [t.bgTransparent],
    ...cardStackTransition,
  },
}

export const cardStackScreenOptions = {
  cardOverlayEnabled: true,
  screenOptions: {
    cardStyle: [t.bgTransparent],
  },
}
