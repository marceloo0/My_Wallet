import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'

import NumberPad from '../components/NumberPad'

const SendRequestScreen: React.FC = () => {
  const [amount, setAmount] = useState('0')

  const convertToReal = (currentAmount: string) => {
    const newAmount = Number(currentAmount) / 100

    return Intl.NumberFormat('pt-BR', {
      style: 'currency', currency: 'BRL'
    }).format(newAmount);
    
    // newAmount.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})
  }

  const pressKey = (item: number, index: number) => {
    setAmount((prev) => {
      return index != 10 ? prev + item : prev.slice(0, prev.length - 1 )
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send</Text>
      <View style={styles.amount}>
        <Text style={styles.textTitle}>{convertToReal(amount)}</Text>
        <Text style={styles.textAmount}>Choose amount to send</Text>
      </View>

      <View style={styles.user}>
        <View style={styles.userDetails}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.textUser}>Marcelo Barbosa</Text>
            <Text style={styles.textPatreon}>Patreon</Text>
          </View>
        </View>
        <MaterialIcons name='edit' size={24} color='#fff' />
      </View>

      <TouchableOpacity style={styles.send}>
        <Text style={styles.textSend}>Send {convertToReal(amount)} to Marcelo</Text>
      </TouchableOpacity>

      <NumberPad onPres={pressKey} />
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
  amount: {
    marginTop: 16,
    alignItems: 'center',
  },
  textTitle: {
    color: '#fff',
    fontSize: 21,
    fontWeight: 'bold',
  },
  textAmount: {
    color: '#727479'
  },  
  send: {
    margin: 16,
    backgroundColor: '#5196f4',
    paddingHorizontal: 32,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 12,
  },
  textSend: {},
  user: {
    flexDirection: 'row',
    // marginLeft: 16,
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderColor: '#fff',
    borderRadius: 25,
  },
  textUser: {
    fontWeight: 'bold',
    color: '#fff',
  },
  textPatreon: {
    color: '#727479'
  },
})

export default SendRequestScreen;