import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { LineChart } from 'react-native-chart-kit'

import purchaseData from '../../purchasesDB'

interface IPurchase {
  product: string;
  store: string;
  address: string;
  price: string;
}

interface ItemsPurchase {
  item: IPurchase;
}

const HomeScreen: React.FC = () => {
  const renderPurchase = ({ item }: ItemsPurchase) => (
    <View style={styles.purchase}>
      <View style={styles.purchaseInfo}>
        <Text style={styles.textProduct}>{item.product}</Text>
        <Text style={styles.textStore}>{item.store}</Text>
        <Text style={styles.textAddress}>{item.address}</Text>
      </View>
      <Text style={styles.textPrice}>{item.price}</Text>
    </View>
  )
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.welcome}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.textWelcome}>Welcome,</Text>
            <Text style={styles.textNameWelcome}>Marcelo Barbosa</Text>
          </View>
        </View>
        <FontAwesome5 name='cog' size={24} color='#565656'/>
      </View>
      <Text style={styles.valor}>R$ 9.184,17</Text>
      <Text style={styles.textValor}>Current Balance</Text>

      <View style={styles.chart}>
        <LineChart 
          data={{
            labels: ["May", "June", "Aug", "Sept", "Oct"],
            datasets: [
              {
                data: [
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                ]
              }
            ]
          }}
          width={Dimensions.get('window').width}
          height={200}
          yAxisLabel='R$ '
          yAxisSuffix='k'
          chartConfig={{
            backgroundGradientFrom: '#333',
            backgroundGradientTo: '#333',
            color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
            labelColor: () => `rgba(255, 255, 255, 0.2)`,
            strokeWidth: 3,
          }}
          withVerticalLines={false}
          withHorizontalLines={false}
          bezier
        />
      </View>

      <FlatList style={styles.purchases} ListHeaderComponent={
        <>
          <View style={styles.transactionHeader}>
            <Text style={styles.textTransaction}>Last Purchases</Text>
            <MaterialIcons name='sort' size={24} color='#5196f4' />
          </View>
          <View style={styles.searchContainer}>
            <AntDesign name='search1' size={18} color='#5196f4' />
            <TextInput placeholder='Search transactions' style={styles.search}/>
          </View>
        </>
      }
      data={purchaseData} 
      renderItem={renderPurchase} 
      showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333', 
  },
  valor: {
    color: '#9c60eb',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    // marginTop: 8,
  },
  textValor: {
    fontSize: 16,
    color: '#727479',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  welcome: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWelcome: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  textNameWelcome: {
    fontSize: 13,
    color: '#727479',
  },
  purchases: {
    backgroundColor: '#2c2c2c',
    padding: 16,
  },
  transactionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTransaction: {
    color: '#cecece',
  },
  searchContainer: {
    backgroundColor: '#3d3d3d',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 6,
    marginVertical: 16,
  },
  search: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: '#dbdbdb',
  },
  purchase: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#393939',
    paddingBottom: 12,
    marginBottom: 12,
  },
  purchaseInfo: {},
  textProduct: {
    fontWeight: 'bold',
    color: '#b4f0ac',
    fontSize: 18,
  },
  textStore: {
    fontWeight: 'normal',
    color: '#ececec',
    fontSize: 16,
  },
  textAddress: {
    color: '#727479',
  },
  textPrice: {
    fontWeight: 'bold',
    color: '#aa6464',
    fontSize: 20,
  },
  chart: {
    paddingVertical: 8,
  },
})

export default HomeScreen;