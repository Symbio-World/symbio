import * as React from 'react'
import {
  View,
  TextInput,
  KeyboardTypeOptions,
  ReturnKeyType,
} from 'react-native'
import { t } from 'react-native-tailwindcss'

type Props = {
  value?: string
  onSubmit?: () => void
  onChange?: (text: string) => void
  autoFocus?: boolean
  keyboardType?: KeyboardTypeOptions
  returnKeyType?: ReturnKeyType
}

export const Input: React.FC<Props> = ({
  value,
  onSubmit,
  onChange,
  autoFocus,
  keyboardType,
  returnKeyType,
}) => (
  <View style={[t.flex1]}>
    <TextInput
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      returnKeyType={returnKeyType}
      keyboardType={keyboardType}
      autoFocus={autoFocus}
      style={[t.border, t.borderGray500, t.h12, t.roundedLg, t.p3, t.textBlack]}
    />
  </View>
)
