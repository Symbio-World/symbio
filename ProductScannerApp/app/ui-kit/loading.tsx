import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { t, color } from 'react-native-tailwindcss'

export const Loading: React.FC = () => {
  return (
    <View style={[t.flex1, t.justifyCenter]}>
      <ActivityIndicator size="large" color={color.green500} />
    </View>
  )
}
