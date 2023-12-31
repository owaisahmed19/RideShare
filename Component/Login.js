import React, {useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,Image} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { auth } from "../Config/FirebaseConfig";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  
} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppTextInput from '../Atomic/Textview/Textview'
import Appbutton from '../Atomic/Button/Button'


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  


  const handleLogin = () => {
    if(username.length==0){
      alert("Email is Required")
      return;
    }
    if(password.length==0){
      alert("Password is Required")
      return;
    }
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredentials) => {
      const user = userCredentials.user;
       if (!user.emailVerified) {
      alert("Verify your email to continue");
      signOut(auth);
       }
       else{
        saveLoginInfo();
        navigation.replace('Dash');
        setUsername('');
        setPassword('');
       }
     })
      .catch((error) => alert(error.message));
  };

  const saveLoginInfo = async () => {
    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
      console.log('Login info saved successfully.');
    } catch (error) {
      console.log('Error saving login info:', error);
    }
  };
   
  return (
    <View style={styles.container}>
       
          <Image
            source={require('../assets/skylarks.png')} 
            style={{ height:200,width:200,marginBottom:30,marginTop:100}}
          />
         
        <AppTextInput
        placeholder="Enter your Email"
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        value={username}
       onChangeText={(text) => setUsername(text)}
        
      />
      <AppTextInput
        placeholder="Enter your password"
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      
      />
  
     <Appbutton 
     children={"Login"}
     onPress={handleLogin}
     />
      

      <View style={{ flexDirection: "row",marginTop:40 }}>
      <Text style={{fontSize:13}}>Don't Have an Account?  </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
      <Text style={{fontSize:13,color:"#e75480"}}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  button: {
    width: '60%',
    backgroundColor: '#e75480',
    padding: 10,
    borderRadius: 5,
    height:40,
    alignItems: 'center',
    marginTop: 70,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
