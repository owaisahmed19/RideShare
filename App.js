import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Component/Main';
import Login from './Component/Login';
import Signup from './Component/Signin';
import Dashboard from './Component/Dashboard'
import Home from './Component/Home'

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function MyTabs() {

  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Main'>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Dash" component={Dashboard} />
      <Stack.Screen name="Home" component={Home} />

    </Stack.Navigator>
  </NavigationContainer>
  );
};