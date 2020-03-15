import React from 'react'
import { Image, Text, ScrollView } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { ProductData } from 'fetcher-core'

type Props = Omit<ProductData, 'links'>

export const ProductView: React.FC<Props> = props => (
  <ScrollView style={[t.bgWhite, t.flex1]}>
    <Image style={[t.h56, t.bgGray200]} source={{ uri: props.image }} resizeMode='contain' />
    <Text style={[t.textLg, t.textCenter]}>{props.name}</Text>
    <Text>{props.description}</Text>
    <Text>{props.ingredients}</Text>
    <Text>{props.allergens}</Text>
    <Text>{props.origin}</Text>
  </ScrollView>
)
