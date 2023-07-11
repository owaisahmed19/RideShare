
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { auth, db } from "../Config/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { getFirestore, setDoc, doc, collection } from "firebase/firestore";

import AppTextInput from '../Atomic/Textview/Textview'
import Appbutton from '../Atomic/Button/Button'

import { View, Text, TextInput, TouchableOpacity, StyleSheet ,Image} from 'react-native';
export default function MyTabs() {
  const navigation = useNavigation();
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');
    const [phone, setphone] = useState('');
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const handleSignup = () => {
      if(name.length==0){
        alert("Name is Required")
        return;
      }
      if(email.length==0){
        alert("Email is Required")
        return;
      }
      if (!emailPattern.test(email)) {
        alert("Valid Email is Required")
        return;
      }
      if(password.length==0){
        alert("Password is Required")
        return;
      }
      if(cpassword.length==0){
        alert("Confirm Password is Required")
        return;
      }
      if(!cpassword.match(password)){
        alert("BOth Password Must be Same")
        return;
      }
      if(phone.length==0){
        alert("Phone No is Required")
        return;
      }


      createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            alert("Email verification sent");
          })
          .catch((error) => alert(error.message))
          .then(() => {
            setDoc(doc(db, "users", auth.currentUser.uid), {
              Name: name,
              Email: email,
              Password: password,
              Phone:phone
            })})
          });

        navigation.navigate('Login');
        setname('');
        setemail('');
        setpassword('');
        setcpassword('');
        setphone('');
    }



  return (
    <View style={styles.container}>
        <Text style={{fontSize:30,color:'#e75480',fontWeight:'bold',marginBottom:50,marginTop:70}}>SIGN UP</Text>
     
      <AppTextInput
        placeholder="Enter your Name"
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        value={name}
       onChangeText={(text) => setname(text)}
        
      />
      <AppTextInput
        placeholder="Enter your Email"
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        value={email}
       onChangeText={(text) => setemail(text)}
        
      />
     
     <AppTextInput
        placeholder="Enter your password"
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        value={password}
       onChangeText={(text) => setpassword(text)}
        
      />
         <AppTextInput
        placeholder="Confirm password"
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        value={cpassword}
       onChangeText={(text) => setcpassword(text)}
        
      />
          <AppTextInput
        placeholder="Enter your Phone No"
        autoCapitalize="none"
        autoComplete="off"
        keyboardType='numeric'
        autoCorrect={false}
        value={phone}
       onChangeText={(text) => setphone(text)}
        
      />

<Appbutton 
     children={"Sign Up"}
     onPress={handleSignup}
     />
      
      <View style={{ flexDirection: "row",marginTop:40 }}>
      <Text style={{fontSize:13}}>Have an Account?  </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={{fontSize:13,color:"#e75480"}}>Sign in</Text>
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

    alignItems: 'center',
    marginTop: 60,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});



