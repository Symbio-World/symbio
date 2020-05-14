import * as React from 'react'

import { SvgProps } from 'react-native-svg'
import camera from '../../assets/svg/camera.svg'
import cross from '../../assets/svg/cross.svg'
import disk from '../../assets/svg/disk.svg'
import flashlight from '../../assets/svg/flashlight.svg'
import historyicon from '../../assets/svg/history.svg'

type Props = SvgProps & {
  iconType: IconsEnum
}

export enum IconsEnum {
  CAMERA = 'CAMERA',
  CROSS = 'CROSS',
  DISK = 'DISK',
  FLASHLIGHT = 'FLASHLIGHT',
  HISTORYICON = 'HISTORYICON',
}

const Icons = {
  [IconsEnum.CAMERA]: camera,
  [IconsEnum.CROSS]: cross,
  [IconsEnum.DISK]: disk,
  [IconsEnum.FLASHLIGHT]: flashlight,
  [IconsEnum.HISTORYICON]: historyicon,
}

export const Icon: React.FC<Props> = ({ iconType, ...otherProps }) => {
  const IconComponent = Icons[iconType]
  if (!IconComponent) throw new Error('No icon found')
  return <IconComponent {...otherProps} />
}
