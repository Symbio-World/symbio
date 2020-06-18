import * as React from 'react'
import { Text, Keyboard } from 'react-native'
import { t } from 'react-native-tailwindcss'
import Toast from 'react-native-simple-toast'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ModalActionsView } from '../ui-kit/ModalActionsView'
import { CloseButton } from '../ui-kit/CloseButton'
import { RoundedButton } from '../ui-kit/RoundedButton'
import { Input } from '../ui-kit/Input'
import { Icons } from '../ui-kit/Icon'

type Props = {
  onSubmit?: (email: string) => void
  onClose?: () => void
}

export const GetUserEmailView: React.FC<Props> = ({
  onSubmit = () => {},
  onClose = () => {},
}) => {
  const [text, setText] = React.useState<string>('')
  const handleSubmit = () => {
    onSubmit(text)
    Keyboard.dismiss()
    Toast.show('Your email was saved successfully')
  }
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[t.flex1, t.mT6, t.mB3, t.mX5]}
      enableOnAndroid
      enableAutomaticScroll
    >
      <Text style={[t.text2xl, t.mB6, t.textCenter]}>Help us improve!</Text>
      <Text style={[t.textBase, t.mB4]}>
        Hi there, thanks for using Symbio! We want to make it better, so we’re
        seeking your help to find out what you need. Will you be willing to take
        part in a short customer interview? Let us know by entering your email
        below so we can contact you. 🙂
      </Text>
      <Text style={[t.textBase, t.mB3]}>Your email</Text>
      <Input
        onChange={setText}
        onSubmit={handleSubmit}
        value={text}
        returnKeyType="send"
        keyboardType="email-address"
        autoFocus
      />
      <ModalActionsView>
        <CloseButton onClose={onClose} />
        <RoundedButton
          onPress={handleSubmit}
          outerTitle="send"
          icon={Icons.SEND}
        />
      </ModalActionsView>
    </KeyboardAwareScrollView>
  )
}
