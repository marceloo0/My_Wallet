import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Fontisto, MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const TouchScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>myBank</Text>

      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.touch} 
          onLongPress={() => navigation.navigate('Tabs')}
        >
          <View style={[styles.circle, { backgroundColor: '#333' }]}>
            <View style={[styles.circle, { backgroundColor: '#5196f405' }]}>
              <View style={[styles.circle, { backgroundColor: '#5196f410' }]}>
                <View style={[styles.circle, { backgroundColor: '#5196f430' }]}>
                  <TouchableOpacity style={styles.touchBtn}>
                    <MaterialIcons name='fingerprint' size={64} color='#fff' />
                  </TouchableOpacity>
                </View>
              </View>
            </View> 
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.id}>
        Touch ID sensor for access to{'\n'} your mybank account.
      </Text>
      <Text style={styles.idText}>
        Please vey your identity{'\n'}using Touch ID.
      </Text>

      <TouchableOpacity 
        style={styles.pinAccess}
        onPress={() => navigation.navigate('Pin')}
      >
        <Fontisto name='locked' color='#964ff0' size={16} />
        <Text style={styles.textPin}>
          Enter Access PIN
        </Text>
      </TouchableOpacity>

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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchBtn: {
    backgroundColor: '#5196f4',
    padding: 8,
    borderRadius: 100,
  },
  circle: {
    padding: 32,
    borderRadius: 999,
  },
  id: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
    color:'#fff',
  },
  idText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color:'#9c9c9c',
    marginTop: 12,
  },
  pinAccess: {
    marginVertical: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPin: {
    color: '#964ff0',
    fontWeight: 'bold',
    marginLeft: 4,
  },
})

export default TouchScreen;