import * as React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { t } from 'react-native-tailwindcss'

import { Icon, IconsEnum } from './Icon'

export enum ButtonStyle {
  FILL,
  OUTLINE,
  TRANSPARENT,
}

type Props = {
  onPress?: () => void
  title?: string
  icon?: IconsEnum
  variant?: ButtonStyle
}

const ButtonBaseStyle = {
  [ButtonStyle.FILL]: [t.bgPrimary],
  [ButtonStyle.OUTLINE]: [t.bgWhite, t.border2, t.borderPrimary],
  [ButtonStyle.TRANSPARENT]: [t.bgTransparent],
}

const InnerTitleBaseStyle = {
  [ButtonStyle.FILL]: [t.textWhite],
  [ButtonStyle.OUTLINE]: [t.textPrimary],
  [ButtonStyle.TRANSPARENT]: [t.textPrimary],
}

export const Button: React.FC<Props> = ({
  onPress = () => {},
  title = '',
  variant = ButtonStyle.FILL,
  icon = null,
}) => {
  const buttonStyle = ButtonBaseStyle[variant]
  const innerStyle = [InnerTitleBaseStyle[variant]]
  return (
    <TouchableOpacity
      style={[
        t.p4,
        t.itemsCenter,
        t.justifyCenter,
        t.flex,
        t.flexRow,
        t.rounded,
        ...buttonStyle,
      ]}
      onPress={onPress}
    >
      {icon ? <Icon style={[t.mR2]} iconType={icon} /> : null}
      <Text style={[t.textCenter, t.text2xl, t.textWhite, ...innerStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
