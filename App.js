import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Component/Main';
import { useCallback, useEffect, useState } from 'react';
import Login from './Component/Login';
import Signup from './Component/Signin';
import Dashboard from './Component/Dashboard'
import Home from './Component/Home'
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function MyTabs() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [val, setval]=useState(true);
  useEffect(() => {
    //setval(message)
    //console.log(message)
    if(val===true){
      prepare();
    }
     
  
     
    }, []);


    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
       // await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
    
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
        SplashScreen.hide();
      }
    }
    if (!appIsReady) {
      // Render the splash screen
      return (
          <View style={styles.containersplash}>
        <Image
          source={require('./assets/skylarks.png')} // Replace with the actual path to your splash image
          style={{ height:300,width:300,alignContent:'center'}}
        />
        </View>
      );
    }
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

const styles = StyleSheet.create({
  parentcont: {
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
  text: {
    alignContent: "center",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  spce: {
    marginTop: 18,
  },
  text1: {
    marginTop: 20,
    paddingRight:50,
    paddingStart:50,
    alignContent: "center",
    fontSize: 12,
    textAlign: "center",
    color: "black",
  },
  container: {
    height: 420,
    width: 370,
    borderRadius: 50,
    backgroundColor: "#e75480",
    alignItems: "center",
  },
  pic: {
    height: 350,
    width: 300,
  },
  Button: {
    marginLeft: 20,
    fontSize: 18,
    width: 155,
    color: "white",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "#e75480",
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 55,
  },
  Button1: {
    fontSize: 18,
    width: 120,
    lineHeight: 55,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 20,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#f8f8ff",
  },
});
