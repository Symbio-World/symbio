import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { colors } from './theme'

export const Loading = () => {
  return (
    <View style={[t.flex1, t.justifyCenter]}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  )
}
