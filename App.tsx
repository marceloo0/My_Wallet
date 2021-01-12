import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Fontisto, MaterialIcons } from '@expo/vector-icons'
import TouchScreen from './src/pages/TouchScreen'
import PinScreen from './src/pages/PinScreen'
import HomeScreen from './src/pages/HomeScreen'
import CardsScreen from './src/pages/CardsScreen'
import SendRequestScreen from './src/pages/SendRequestScreen'

export default function App() {
  const Stack = createStackNavigator()
  const TabStack = createBottomTabNavigator()

  const tabBarOptions = {
    showLabel: true,
    style: {
      backgroundColor: '#333',
      borderTopColor: '#333',
      paddingBottom: 8,
    }
  }

  const screenOptions =({route}: any) => ({
    tabBarIcon: ({focused}: any) => {
      let icon = '';
      const color = focused ? '#559dff' : '#828282'
      const size = 24

      switch (route.name) {
        case 'Cards':
            icon = 'credit-card'
          break;
        
        case 'SendRequest':
            icon = 'send'
          break;

        default:
            icon = 'dashboard'
          break;
      }
      return <MaterialIcons name={icon} size={size} color={color} />
    }
  })

  const TabStackScreens = () => {
    return (
      <TabStack.Navigator 
        tabBarOptions={tabBarOptions} 
        screenOptions={screenOptions}
      >
        <TabStack.Screen name='Home' component={HomeScreen} />
        <TabStack.Screen 
          name='SendRequest' 
          component={SendRequestScreen} 
          options={{ title: 'Send & Request'}}
        />
        <TabStack.Screen 
          name='Cards' 
          component={CardsScreen} 
          options={{ title: 'My Cards'}}
        />
      </TabStack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Touch' component={TouchScreen} />
        <Stack.Screen name='Pin' component={PinScreen} />
        <Stack.Screen name='Tabs' component={TabStackScreens} />
      </Stack.Navigator>
      <StatusBar style="light" backgroundColor="#333" translucent={false} />
    </NavigationContainer>
  );
}

