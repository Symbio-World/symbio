import * as React from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { ProductData } from '@symbio/barcode-processor-core'
import { Button } from '../ui-kit/Button'

type Props = Omit<ProductData, 'links'> & {
  onFeedbackPress?: (title: string) => void
}
export const ProductView: React.FC<Props> = ({
  image = '',
  name = '',
  description = '',
  ingredients = '',
  allergens = [],
  origin = '',
  onFeedbackPress = () => {},
}) => {
  return (
    <ScrollView style={[t.bgWhite, t.flex1]}>
      <Image
        style={[t.h56, t.bgGray200]}
        source={{ uri: image }}
        resizeMode="contain"
      />
      <View style={[t.p8]}>
        <Text style={[t.textLg, t.mB8]}>{name}</Text>
        <Text>{description}</Text>
        <Text style={[t.fontBold, t.mT8]}>Ingredients</Text>
        <Text>{ingredients ? ingredients : '-'}</Text>
        <Text style={[t.fontBold, t.mT8]}>Allergens</Text>
        {allergens.map((a) => (
          <Text>{a}</Text>
        ))}
        <Text style={[t.fontBold, t.mT8]}>Origin</Text>
        <Text>{origin}</Text>
        <View style={[t.mT5]}>
          <Button
            title="Tell us what's missing"
            onPress={() => onFeedbackPress("Tell us what's missing")}
          />
        </View>
      </View>
    </ScrollView>
  )
}
