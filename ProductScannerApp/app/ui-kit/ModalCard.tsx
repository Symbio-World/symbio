import * as React from 'react'
import { View } from 'react-native'
import { t } from 'react-native-tailwindcss'

type ModalCardProps = {
  modalsInStack: number
}

export const ModalCard: React.FC<ModalCardProps> = ({
  children,
  modalsInStack,
}) => {
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
      <View
        style={[
          t.w10_12,
          t.bgWhite,
          t.roundedLg,
          { marginTop: 10 * modalsInStack },
        ]}
      >
        {children}
      </View>
    </View>
  )
}
