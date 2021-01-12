import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface NumberProps {
  onPres: (item: any, index: number) => void
}

const NumberPad: React.FC<NumberProps> = ({ onPres }) => {
  const buttons = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 
    <MaterialIcons name='keyboard-backspace' size={24} />
  ]
  return (
    <View style={styles.keyPad}>
      {buttons.map((item, index) => {
        return (
          <TouchableOpacity 
            key={index} 
            style={styles.number}
            onPress={() => onPres(item, index)} delayPressIn={0}
          >
            <Text style={styles.textNumber}>{item}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  keyPad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 48,
  },
  number: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#cecece'
  },
  textNumber: {
    color: '#fff',
    fontSize: 18,
  }
})

export default NumberPad;