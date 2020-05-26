import * as React from 'react'
import { View, Text } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { Icon, Icons } from './Icon'
import { CloseButtonView } from './CloseButtonView'

type Props = {
  error?: unknown
  onPress?: () => void
}
export const ErrorView: React.FC<Props> = ({ onPress = () => {} }) => {
  return (
    <View style={[t.flex1]}>
      <Icon icon={Icons.FATAL_ERROR} />
      <Text style={[t.textCenter, t.textBlack, t.text5xl, t.mB10]}>
        OOOOPS!
      </Text>
      <Text style={[t.textCenter, t.textBlack, t.text3xl, t.mX12]}>
        Something went wrong... You can tell us what happened or try again later
      </Text>
      <CloseButtonView onPress={onPress} />
    </View>
  )
}
