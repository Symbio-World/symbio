import * as React from 'react'
import { View, Text } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { Button } from './Button'

type Props = {
  onRetry: () => void
}
export const TimeoutView: React.FC<Props> = ({ onRetry }) => {
  return (
    <View style={[t.flex1, t.justifyCenter, t.alignCenter, t.p8]}>
      <Text style={[t.mB2]}>
        It took to long to receive information, please check your network
        connection and retry
      </Text>
      <Button title="Retry" onPress={onRetry} />
    </View>
  )
}
