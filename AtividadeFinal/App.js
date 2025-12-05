import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CalcDesconto from './src/screens/CalcDesconto';
import RingList from './src/screens/RingList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Atividade Final' }}/>

        <Stack.Screen 
          name="CalcDesconto" 
          component={CalcDesconto}
          options={{ title: 'Calculadora de Desconto' }}
        />

        <Stack.Screen 
          name="RingList" 
          component={RingList}
          options={{ title: 'Lista de Acessórios' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}