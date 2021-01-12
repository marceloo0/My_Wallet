import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

interface IMyCards {
  color: string;
  number: number;
  exp: string;
  logo: object;
}

interface ICardsProps {
  item: IMyCards;
}

const CardsScreen: React.FC = () => {
  const myCards = [
    {
      id: '1',
      color: '#5750f0',
      number: 5121,
      exp: '09/2021',
      logo: require('../assets/visa.png')
    },
    {
      id: '2',
      color: '#f05050',
      number: 4412,
      exp: '10/2022',
      logo: require('../assets/master.png')
    }
  ]

  const renderCard = ({ item }: ICardsProps) => (
    <View style={styles.cardContainer}>
      <View style={styles.cardInfo}>
        <View style={styles.cardLogoContainer}>
          <Image style={styles.cardLogo} source={item.logo} resizeMode='contain' />
        </View>
        <View style={styles.cardDetails}>
          <Text style={styles.textAst}>
            &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 
            <Text style={styles.textNumber}> {item.number}</Text>
          </Text>
          <Text style={styles.textExp}>{item.exp}</Text>
        </View>
      </View>
      <View style={styles.cardActions}>
        <TouchableOpacity style={styles.remove}>
          <Text style={styles.textRemove}>Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.update}>
          <Text style={styles.textUpdate}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cards</Text>

      <FlatList
        style={styles.cards}
        data={myCards}
        renderItem={renderCard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  title: {
    color: '#9c60eb',
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 16,
    fontWeight: 'bold',
  },
  cards: {
    paddingHorizontal: 8,
    marginTop: 32,
  },
  cardContainer: {
    backgroundColor: '#504f4f',
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
  },
  cardInfo: {
    padding: 16,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#6e6e6e',
  },
  cardLogoContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  cardLogo: {
    width: 60,
    height: 40,
  },
  cardDetails: {},
  textAst: {
    color: '#ececec',
    fontSize: 21,
  },
  textNumber: {
    color: '#ececec',
    fontSize: 21,
  },
  textExp: {
    color: '#727479'
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 16,
  },
  remove: {
    marginRight: 32,
  },
  textRemove: {
    color: '#f56060',
  },
  update: {
    backgroundColor: '#3d3d3d',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  textUpdate: {
    color: '#6d8ee7',
  },
})

export default CardsScreen;