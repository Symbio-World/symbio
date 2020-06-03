import * as React from 'react'
import { View, Text, Linking } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { Button } from '../ui-kit/Button'

type Props = {
  barcode?: string
}
export const ProductNotFound: React.FC<Props> = ({ barcode }) => {
  return (
    <View style={[t.flex1, t.justifyCenter, t.m5]}>
      <Text>
        Unfortunately we could not find any data for this barcode{' '}
        <Text>{barcode}</Text>
      </Text>
      <View style={[t.mY5]}>
        <Button
          title="Search with google"
          onPress={() =>
            Linking.openURL(`https://www.google.com/search?q=${barcode}`)
          }
        />
      </View>
    </View>
  )
}
