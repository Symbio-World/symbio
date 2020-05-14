import * as React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { t } from 'react-native-tailwindcss'

import { Icon, IconsEnum } from './Icon'

export enum RoundedButtonStyle {
  FILL,
  OUTLINE,
  TRANSPARENT,
}

type Props = {
  onPress?: () => void
  innerTitle?: string
  outerTitle?: string
  icon?: IconsEnum
  buttonStyleType?: RoundedButtonStyle
}

const ButtonBaseStyle = {
  [RoundedButtonStyle.FILL]: [t.bgPrimary],
  [RoundedButtonStyle.OUTLINE]: [t.bgWhite, t.border2, t.borderPrimary],
  [RoundedButtonStyle.TRANSPARENT]: [t.bgTransparent],
}

const InnerTitleBaseStyle = {
  [RoundedButtonStyle.FILL]: [t.textWhite],
  [RoundedButtonStyle.OUTLINE]: [t.textPrimary],
  [RoundedButtonStyle.TRANSPARENT]: [t.textPrimary],
}

export const RoundedButton: React.FC<Props> = ({
  onPress = () => {},
  innerTitle = '',
  outerTitle = '',
  buttonStyleType = RoundedButtonStyle.FILL,
  icon = null,
}) => {
  const buttonStyle = ButtonBaseStyle[buttonStyleType]
  const innerStyle = InnerTitleBaseStyle[buttonStyleType]

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          ...buttonStyle,
          t.itemsCenter,
          t.justifyCenter,
          t.w20,
          t.h20,
          t.roundedFull,
        ]}
      >
        {innerTitle ? (
          <Text style={[t.textCenter, t.text2xl, ...innerStyle]}>
            {innerTitle}
          </Text>
        ) : null}
        {icon ? <Icon iconType={icon} /> : null}
      </View>
      <View>
        {outerTitle ? (
          <Text style={[t.textCenter, t.text2xl, t.textPrimary]}>
            {outerTitle}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  )
}
