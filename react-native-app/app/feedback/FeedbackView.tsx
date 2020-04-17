import * as React from 'react'
import { Platform, View, Text, TextInput } from 'react-native'
import { t } from 'react-native-tailwindcss'
import Toast from 'react-native-simple-toast'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from '../ui-kit/Button'

type Props = {
  title?: string
  onSubmit?: (feedback: string) => void
}

export const FeedbackView: React.FC<Props> = ({
  title = '',
  onSubmit = () => {},
}) => {
  const [text, setText] = React.useState<string>('')
  const handlePress = () => {
    onSubmit(text)
    Toast.show('Feedback successfully sent')
  }
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[t.flex1, t.mY16, t.mX5]}
      enableOnAndroid
      enableAutomaticScroll
    >
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
    </KeyboardAwareScrollView>
  )
}
