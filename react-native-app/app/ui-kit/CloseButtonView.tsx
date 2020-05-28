import * as React from 'react'
import { t } from 'react-native-tailwindcss'
import { CloseButton } from './CloseButton'
import { View } from 'react-native'

type CloseButtonViewProps = {
  onClose?: () => void
}

export const CloseButtonView: React.FC<CloseButtonViewProps> = ({
  onClose,
}) => (
  <>
    <View style={[t.h40]} />
    <View style={[t.absolute, t.bottom0, t.wFull, t.itemsCenter, t.pB5]}>
      <CloseButton onClose={onClose} />
    </View>
  </>
)
