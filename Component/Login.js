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


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    checkLoginStatus(); // Check if the user is already logged in on component mount
  }, []);

  const checkLoginStatus = async () => {
    try {
      const savedUsername = await AsyncStorage.getItem('username');
      const savedPassword = await AsyncStorage.getItem('password');
      if (savedUsername && savedPassword) {
        navigation.replace('Home');
      }
    } catch (error) {
      console.log('Error retrieving login info:', error);
    }
  };


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
        navigation.replace('Home');
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
            style={{ height:200,width:200,marginBottom:40,marginTop:100}}
          />
         
      
      <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

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
