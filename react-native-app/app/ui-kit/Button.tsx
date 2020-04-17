import * as React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { t } from 'react-native-tailwindcss'

type Props = {
  onPress?: () => void
  title?: string
}
export const Button: React.FC<Props> = ({ onPress = () => {}, title = '' }) => {
  return (
    <TouchableOpacity
      style={[
        t.bgGreen500,
        t.p4,
        t.alignCenter,
        t.justifyCenter,
        t.flex,
        t.rounded,
      ]}
      onPress={onPress}
    >
      <Text style={[t.textCenter, t.text2xl, t.textWhite]}>{title}</Text>
    </TouchableOpacity>
  )
}
