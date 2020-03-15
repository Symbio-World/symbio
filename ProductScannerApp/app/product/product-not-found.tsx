import React from 'react'
import { View, Text } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { Button } from '../ui-kit/button'

type Props = {
  barcode?: string
}
export const ProductNotFound: React.FC<Props> = ({ barcode }) => {
  return (
    <View style={[t.flex1, t.justifyCenter]}>
      <Text>Unfortunately we could not found any product with this barcode<Text>{barcode}</Text></Text>
      <Button title='Add Manually' />
    </View>
  )
}
