import * as React from 'react'

import { RoundedButton } from './RoundedButton'
import { ButtonStyle } from './Button'
import { Icons } from './Icon'

type CloseButtonProps = {
  onClose?: () => void
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => (
  <RoundedButton
    onPress={onClose}
    outerTitle="close"
    variant={ButtonStyle.OUTLINE}
    icon={Icons.CROSS}
  />
)
