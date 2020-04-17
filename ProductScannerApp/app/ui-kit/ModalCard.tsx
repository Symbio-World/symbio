import * as React from 'react'
import { View } from 'react-native'
import { t } from 'react-native-tailwindcss'

type ModalCardProps = {}

export const ModalCard: React.FC<ModalCardProps> = ({ children }) => {
  return (
    <View
      style={[
        t.bgTransparent,
        t.wFull,
        t.hFull,
        t.itemsCenter,
        t.justifyCenter,
      ]}
    >
      <View style={[t.w10_12, t.bgWhite, t.roundedLg, t.shadowXl]}>
        {children}
      </View>
    </View>
  )
}
