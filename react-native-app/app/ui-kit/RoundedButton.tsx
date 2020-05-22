import * as React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { t } from 'react-native-tailwindcss'

import { Icon, Icons } from './Icon'
import { ButtonStyle } from './Button'

type Props = {
  onPress?: () => void
  innerTitle?: string
  outerTitle?: string
  icon?: Icons
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

export const RoundedButton: React.FC<Props> = ({
  onPress = () => {},
  innerTitle = '',
  outerTitle = '',
  variant = ButtonStyle.FILL,
  icon = null,
}) => {
  const buttonStyle = ButtonBaseStyle[variant]
  const innerStyle = InnerTitleBaseStyle[variant]

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          ...buttonStyle,
          t.itemsCenter,
          t.justifyCenter,
          t.w16,
          t.h16,
          t.roundedFull,
          t.p1,
        ]}
      >
        {innerTitle ? (
          <Text style={[t.textCenter, t.textXl, ...innerStyle]}>
            {innerTitle}
          </Text>
        ) : null}
        <View style={[t.w5, t.h5]}>
          {icon ? <Icon width={'100%'} height={'100%'} icon={icon} /> : null}
        </View>
      </View>
      <View>
        {outerTitle ? (
          <Text style={[t.textCenter, t.textXl, t.textPrimary]}>
            {outerTitle}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  )
}
