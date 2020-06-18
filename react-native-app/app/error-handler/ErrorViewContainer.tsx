import * as React from 'react'
import { View, Text } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { RFPercentage } from 'react-native-responsive-fontsize'

import { Icon, Icons } from '../ui-kit/Icon'
import { ModalActionsView } from '../ui-kit/ModalActionsView'
import { CloseButton } from '../ui-kit/CloseButton'
import { saveError } from '../error-handler/saveError'

type Props = {
  error?: Error
  onClose?: () => void
}

export const ErrorViewContainer: React.FC<Props> = ({
  onClose = () => {},
  error,
}) => {
  React.useEffect(() => {
    if (error) {
      saveError(error)
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
      <ModalActionsView>
        <CloseButton onClose={onClose} />
      </ModalActionsView>
    </View>
  )
}
