import * as React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { t } from 'react-native-tailwindcss'

import { Icon, IconsEnum } from './Icon'
import { ButtonStyle } from './Button'

type Props = {
  onPress?: () => void
  innerTitle?: string
  outerTitle?: string
  icon?: IconsEnum
  buttonStyleType?: ButtonStyle
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

export const RoundedButton: React.FC<Props> = ({
  onPress = () => {},
  innerTitle = '',
  outerTitle = '',
  buttonStyleType = ButtonStyle.FILL,
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
