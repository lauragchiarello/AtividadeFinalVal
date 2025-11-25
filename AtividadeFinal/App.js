import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DiscountCalculator from './src/screens/DiscountCalculator';
import CarList from './src/screens/CarList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'App Móvel - Menu Principal' }}
        />
        <Stack.Screen 
          name="DiscountCalculator" 
          component={DiscountCalculator}
          options={{ title: 'Calculadora de Desconto' }}
        />
        <Stack.Screen 
          name="CarList" 
          component={CarList}
          options={{ title: 'Lista de Carros' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}