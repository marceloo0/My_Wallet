import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import NumberPad from '../components/NumberPad'

const PinScreen: React.FC = () => {
  const navigation = useNavigation();
  const [pinCount, setPinCount] = useState(0)
  const totalPins = 6

  useEffect(() => {
    if (pinCount === totalPins) {
      navigation.navigate('Tabs')
    }
  }, [pinCount])

  const renderPins = () => {
    const pins = []

    for (let x = 1; x <= totalPins; x++) {
      pins.push(
        x <= pinCount ? (
          <View style={styles.pinContainer} key={x}>
            <View style={styles.pin}/>
          </View>
        ) : (
          <View style={styles.pinContainer} key={x} />
        )
      )
    }
    return pins
  }

  const pressKey = (item: string, index: number) => {
    setPinCount((prev) => {
      return index != 10 ? prev + 1 : prev - 1
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>myBank</Text>
      <Text style={styles.textTitle}>Enter your PIN code.</Text>

      <View style={styles.accessPin}>
        {renderPins()}
      </View>

      <Text style={styles.textForgot}>Forgot PIN?</Text>

      <TouchableOpacity style={styles.useTouch} onPress={() => navigation.navigate('Touch')}>
        <Fontisto name='locked' color='#964ff0' size={16} />
        <Text style={styles.textUse}>Use touch id</Text>
      </TouchableOpacity>

      <NumberPad onPres={pressKey} />

      <Text>
        {pinCount}
      </Text>
    </SafeAreaView>
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
    marginVertical: 24,
  },
  textTitle: {
    color: '#fff',
    textAlign: 'center',
  },
  accessPin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 64,
    marginVertical: 32,
  },
  textForgot: {
    color: '#ececec',
    textAlign: 'center',
  },
  useTouch: {
    marginVertical: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textUse: {
    fontWeight: 'bold',
    margin: 8,
    color: '#964ff0',
  },
  pinContainer: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#5196f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pin: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#5196f4',
  },
})

export default PinScreen;