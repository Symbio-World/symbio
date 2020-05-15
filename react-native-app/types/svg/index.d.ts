declare module '*.svg' {
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  /* eslint-disable import/no-default-export */
  export default content
  /* eslint-enable */
}
