import * as React from 'react'

import { SvgProps } from 'react-native-svg'
import camera from '../../assets/svg/camera.svg'
import cross from '../../assets/svg/cross.svg'
import disk from '../../assets/svg/disk.svg'
import flashlight from '../../assets/svg/flashlight.svg'
import historyicon from '../../assets/svg/history.svg'

type Props = SvgProps & {
  icon: Icons
}

export enum Icons {
  CAMERA = 'CAMERA',
  CROSS = 'CROSS',
  DISK = 'DISK',
  FLASHLIGHT = 'FLASHLIGHT',
  HISTORYICON = 'HISTORYICON',
}

const IconsMap = {
  [Icons.CAMERA]: camera,
  [Icons.CROSS]: cross,
  [Icons.DISK]: disk,
  [Icons.FLASHLIGHT]: flashlight,
  [Icons.HISTORYICON]: historyicon,
}

export const Icon: React.FC<Props> = ({ icon, ...otherProps }) => {
  const IconComponent = IconsMap[icon]
  if (!IconComponent) throw new Error('No icon found')
  return <IconComponent {...otherProps} />
}
