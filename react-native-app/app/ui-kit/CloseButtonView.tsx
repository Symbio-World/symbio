import * as React from 'react'
import { t } from 'react-native-tailwindcss'
import { CloseButton } from './CloseButton'
import { View } from 'react-native'

type CloseButtonViewProps = {
  onPress?: () => void
}

export const CloseButtonView: React.FC<CloseButtonViewProps> = ({
  onPress,
}) => (
  <>
    <View style={[t.h40]} />
    <View style={[t.absolute, t.bottom0, t.wFull, t.itemsCenter, t.pB5]}>
      <CloseButton onPress={onPress} />
    </View>
  </>
)
