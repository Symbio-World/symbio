import * as React from 'react'

import { SvgProps } from 'react-native-svg'
import camera from '../../assets/svg/camera.svg'
import cross from '../../assets/svg/cross.svg'
import disk from '../../assets/svg/disk.svg'
import flashlight from '../../assets/svg/flashlight.svg'
import history from '../../assets/svg/history.svg'
import fatalError from '../../assets/svg/fogg-fatal-error.svg'
import send from '../../assets/svg/send.svg'

type Props = SvgProps & {
  icon: Icons
}

export enum Icons {
  CAMERA = 'CAMERA',
  CROSS = 'CROSS',
  DISK = 'DISK',
  FLASHLIGHT = 'FLASHLIGHT',
  HISTORY = 'HISTORY',
  FATAL_ERROR = 'FATAL_ERROR',
  SEND = 'SEND',
}

const IconsMap = {
  [Icons.CAMERA]: camera,
  [Icons.CROSS]: cross,
  [Icons.DISK]: disk,
  [Icons.FLASHLIGHT]: flashlight,
  [Icons.HISTORY]: history,
  [Icons.FATAL_ERROR]: fatalError,
  [Icons.SEND]: send,
}

export const Icon: React.FC<Props> = ({ icon, ...otherProps }) => {
  const IconComponent = IconsMap[icon]
  if (!IconComponent) throw new Error('No icon found')
  return <IconComponent {...otherProps} />
}
