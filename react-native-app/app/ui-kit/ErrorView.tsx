import * as React from 'react'
import { View, Text } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { RFPercentage } from 'react-native-responsive-fontsize'

import { Icon, Icons } from './Icon'
import { CloseButtonView } from './CloseButtonView'
import { saveError } from '../error-handler/saveError'

type Props = {
  error?: Error
  onClose?: () => void
}

export const ErrorView: React.FC<Props> = ({ onClose = () => {}, error }) => {
  React.useEffect(() => {
    if (error) {
      saveError(error.message)
    }
  })
  return (
    <View style={[t.flex1]}>
      <Icon icon={Icons.FATAL_ERROR} />
      <Text
        style={[
          t.textCenter,
          t.textBlack,
          t.mB10,
          { fontSize: RFPercentage(7) },
        ]}
      >
        OOOOPS!
      </Text>
      <Text
        style={[
          t.textCenter,
          t.textBlack,
          t.mX12,
          { fontSize: RFPercentage(4) },
        ]}
      >
        Something went wrong... You can tell us what happened or try again later
      </Text>
      <CloseButtonView onClose={onClose} />
    </View>
  )
}
