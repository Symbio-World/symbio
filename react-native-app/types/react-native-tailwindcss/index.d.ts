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

  /* eslint-disable functional/prefer-type-literal */
  export interface TailwindStyles extends DefaultTailwindStyles, CustomColors {}
  export interface TailwindColors extends DefaultTailwindColors, CustomColors {}
  /* eslint-enable */
}
