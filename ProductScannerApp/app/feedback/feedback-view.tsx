import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { t } from 'react-native-tailwindcss'
import Toast from 'react-native-simple-toast'
import { Button } from '../ui-kit/button'

type Props = {
  title?: string
  onSubmit?: (feedback: string) => void
}
export const FeedbackView: React.FC<Props> = ({
  title,
  onSubmit = () => {},
}) => {
  const [text, setText] = useState<string>('')
  const handlePress = () => {
    onSubmit(text)
    Toast.show('Feedback successfully sent')
  }
  return (
    <View style={[t.flex1, t.mY16, t.mX5]}>
      <Text style={[t.text2xl, t.fontBold, t.mY4]}>💬{title}</Text>
      <View style={[t.flex1]}>
        <TextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={setText}
          value={text}
          autoFocus
        />
      </View>
      <Button title="Submit feedback" onPress={handlePress} />
    </View>
  )
}
