import * as React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { PrincipleView } from './PrincipleView'
import { Button } from '../ui-kit/Button'

type Props = {
  principles?: string[]
  onSubmit?: (selectedPrinciples: string[]) => void
}
export const SetupPrinciplesView: React.FC<Props> = ({
  principles = [],
  onSubmit = () => {},
}) => {
  const [selectedPrinciples, setSelectedPrinciples] = React.useState<string[]>(
    [],
  )

  const onPrinciplePress = (principle: string) => {
    if (selectedPrinciples.includes(principle)) {
      setSelectedPrinciples(selectedPrinciples.filter((p) => p !== principle))
    } else {
      setSelectedPrinciples([...selectedPrinciples, principle])
    }
  }

  const handleSubmit = () => {
    onSubmit(selectedPrinciples)
  }

  return (
    <View style={[t.m5]}>
      <ScrollView>
        <View>
          <Text style={[t.text4xl, t.fontBold, t.mY4]}>👋Hey There</Text>
          <Text style={[t.mY4]}>
            <Text style={[t.fontBold]}>Should I Buy</Text> lets you understand
            if the products you find in the supermarket fit your values.
          </Text>
          <Text style={[t.fontBold]}>What is important to you?</Text>
          <View style={[t.flexRow, t.flexWrap, t.mY4]}>
            {principles.map((p) => (
              <PrincipleView
                key={p}
                title={p}
                onPress={() => onPrinciplePress(p)}
                selected={selectedPrinciples.includes(p)}
              />
            ))}
          </View>
        </View>
        <View style={[t.h24]} />
      </ScrollView>
      <View style={[t.absolute, t.bottom0, t.wFull, t.bgWhite]}>
        <Button onPress={handleSubmit} title="Get Started" />
      </View>
    </View>
  )
}
