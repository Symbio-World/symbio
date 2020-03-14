import React from 'react'
import { View, Text } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { User } from './auth'
import { Heading } from './ui-kit/heading'

type Props = {
  user: User
}
export const Intro: React.FC<Props> = () => {
  return (
    <View>
      <Heading>👋Hey There</Heading>
      <Text><Text style={[t.fontBold]}>Should I Buy</Text> lets you understand if the products you find in the supermarket fit your values.</Text>
      <Text style={[t.fontBold]}>What is important to you?</Text>

    </View>
  )
}
