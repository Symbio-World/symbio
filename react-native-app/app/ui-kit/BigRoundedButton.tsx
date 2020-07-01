import * as React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { t } from 'react-native-tailwindcss'

import { Icon, Icons } from './Icon'

type Props = {
  title: string
  icon: React.ReactNode
  onPress?: () => void
  variant?: 'outline' | 'fill'
}

const ButtonStyle = {
  fill: [t.bgPrimary],
  outline: [t.bgWhite, t.border2, t.borderPrimary],
}

const TitleStyle = {
  fill: [t.textWhite],
  outline: [t.textPrimary],
}

export const BigRoundedButton: React.FC<Props> = ({
  title,
  icon,
  onPress = () => {},
  variant = 'fill',
}) => {
  const buttonStyle = ButtonStyle[variant]
  const titleStyle = TitleStyle[variant]

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          ...buttonStyle,
          t.w24,
          t.h24,
          t.roundedFull,
          t.flexCol,
          t.itemsCenter,
          t.justifyCenter,
        ]}
      >
        <View style={[t.w6, t.h6, t.mB2]}>{icon}</View>
        <View>
          <Text style={[t.textCenter, t.textBase, t.fontBold, ...titleStyle]}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
