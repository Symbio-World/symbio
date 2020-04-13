import * as React from 'react'
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { t } from 'react-native-tailwindcss'
import Swiper from 'react-native-deck-swiper'

const SecondsModal = ({ pushCard, popCard }) => {
  const [value, onChangeText] = React.useState('Useless Placeholder')
  return (
    <View style={styles.card}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <TouchableOpacity onPress={popCard}>
        <Text>Pop from top</Text>
      </TouchableOpacity>
      <Text style={styles.text}>My</Text>
    </View>
  )
}

const ThirdModal = ({ pushCard, popCard }) => (
  <View style={styles.card}>
    <TouchableOpacity onPress={popCard}>
      <Text>Pop from top</Text>
    </TouchableOpacity>
    <Text style={styles.text}>World</Text>
  </View>
)

const CardsMock = [
  {
    key: '1',
    component: ({ pushCard, popCard }) => (
      <View style={styles.card}>
        <Text style={styles.text}>Hello</Text>
        <TouchableOpacity onPress={popCard}>
          <Text>Pop from top</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            pushCard({
              key: '2',
              component: SecondsModal,
            })
          }
        >
          <Text>Push to second card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            pushCard({
              key: '3',
              component: ThirdModal,
            })
          }
        >
          <Text>Push to third card</Text>
        </TouchableOpacity>
      </View>
    ),
  },
]

export const SwipableStackView = () => {
  const [cards, setCards] = React.useState(CardsMock)
  const pushCard = (newCard) => {
    if (!cards.find(({ key }) => key === newCard.key)) {
      setCards([newCard, ...cards])
    }
  }

  const popCard = (newCard) => setCards([...cards].slice(1))

  return (
    <Swiper
      key={cards.length}
      cards={cards}
      keyExtractor={(cardData) => (cardData ? cardData.key : null)}
      renderCard={(cardData) => {
        if (!cardData) return null
        const { component: CardComponent } = cardData
        return <CardComponent pushCard={pushCard} popCard={popCard} />
      }}
      onSwipedAll={() => {
        console.log('onSwipedAll')
      }}
      cardIndex={0}
      stackSize={3}
      backgroundColor={'#4FD0E9'}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
  },
})
