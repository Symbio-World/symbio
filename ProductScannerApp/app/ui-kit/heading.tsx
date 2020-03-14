import React from 'react'
import { View, Text } from 'react-native'

type Props = {
  children: React.ReactNode
}
export const Heading: React.FC<Props> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}
