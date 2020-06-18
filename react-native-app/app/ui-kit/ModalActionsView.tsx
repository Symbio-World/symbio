import * as React from 'react'
import { t } from 'react-native-tailwindcss'
import { View } from 'react-native'

type ModalActionsViewProps = {
  children: React.ReactNode
}

export const ModalActionsView: React.FC<ModalActionsViewProps> = ({
  children,
}) => (
  <View
    style={[
      t.flexRow,
      t.justifyEvenly,
      t.absolute,
      t.bottom0,
      t.wFull,
      t.itemsCenter,
    ]}
  >
    {children}
  </View>
)
