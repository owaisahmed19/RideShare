
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../Atomic/Button/Button'
import TextView from '../Atomic/Textview/Textview'

export default function App() {
  const navigation = useNavigation();
   const Handlepress=()=>{
      removeLoginInfo();
      navigation.replace('Main', { message: false })
    }
    const removeLoginInfo = async () => {
      try {
        await AsyncStorage.removeItem('username');
        await AsyncStorage.removeItem('password');
        console.log('Login info removed successfully.');
      } catch (error) {
        console.log('Error removing login info:', error);
      }
    };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={Handlepress}>
      <Text style={{fontSize:20,marginTop:60}}>Log Out</Text>
      </TouchableOpacity>
      
    </View>
  );

  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containersplash: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
