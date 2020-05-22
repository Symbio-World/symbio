import * as React from 'react'

import { RoundedButton } from './RoundedButton'
import { ButtonStyle } from './Button'
import { Icons } from './Icon'

type CloseButtonProps = {
  onPress?: () => void
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onPress }) => (
  <RoundedButton
    onPress={onPress}
    outerTitle="close"
    variant={ButtonStyle.OUTLINE}
    icon={Icons.CROSS}
  />
)
