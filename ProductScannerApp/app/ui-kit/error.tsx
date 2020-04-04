import React from 'react'
import { View, Text } from 'react-native'
import { t } from 'react-native-tailwindcss'

type Props = {
  error?: Error | string
}
export const Error: React.FC<Props> = () => {
  return (
    <View style={[t.flex1, t.justifyCenter]}>
      <Text>Something went wrong...</Text>
    </View>
  )
}
