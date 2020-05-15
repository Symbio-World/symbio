import {
  TailwindColors as DefaultTailwindColors,
  TailwindStyles as DefaultTailwindStyles,
} from 'react-native-tailwindcss'

export {}

declare module 'react-native-tailwindcss' {
  type CustomColors = {
    textPrimary: {}
    borderPrimary: {}
    bgPrimary: {}
    recycling: {}
    allergies: {}
  }

  export type TailwindStyles = DefaultTailwindStyles & CustomColors & {}
  export type TailwindColors = DefaultTailwindColors & CustomColors & {}
}
