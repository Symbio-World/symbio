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
  cardStyleInterpolator: ({ current, layouts }) => {
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
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [-1, 0],
            }),
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
export const cardStackScreenOptions = {
  mode: 'modal',
  cardOverlayEnabled: true,
  screenOptions: {
    cardStyle: [t.bgTransparent],
    ...cardStackTransition,
  },
}
