import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { t } from 'react-native-tailwindcss'

type Props = {
  title: string
  selected?: boolean
  onPress?: () => void
}
export const Tag: React.FC<Props> = ({
  title,
  onPress = () => {},
  selected = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        selected ? t.bgGreen500 : t.bgWhite,
        t.roundedFull,
        t.m3,
        t.pY3,
        t.pX6,
      ]}
      onPress={onPress}
    >
      <Text
        style={[t.textXl, selected ? t.textWhite : t.textGreen500, t.fontBold]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
