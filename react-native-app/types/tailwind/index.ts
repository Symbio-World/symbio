export {}

declare module 'react-native-tailwindcss' {
  import {
    TailwindColors as DefaultTailwindColors,
    TailwindStyles as DefaultTailwindStyles,
  } from 'react-native-tailwindcss'

  interface CustomColors {
    primary: any
    recycling: any
    allergies: any
  }

  export interface TailwindStyles extends DefaultTailwindStyles, CustomColors {}
  export interface TailwindColors extends DefaultTailwindColors, CustomColors {}
}
