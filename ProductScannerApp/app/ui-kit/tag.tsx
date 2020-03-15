import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { t } from 'react-native-tailwindcss'

type Props = {
  title: string
  onPress?: () => void
}
export const Tag: React.FC<Props> = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      style={[t.bgGreen500, t.roundedFull, t.m3, t.pY3, t.pX6]}
      onPress={onPress}
    >
      <Text style={[t.textXl, t.textWhite, t.fontBold]}>{title}</Text>
    </TouchableOpacity>
  )
}
