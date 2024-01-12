import { View, Text } from 'react-native'
import React from 'react'
import HomeYoutube from './HomeYoutube';
import ContactYoutube from './Login';
import Todo from './Todo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} />

      <Stack.Screen name='Home' component={Todo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App