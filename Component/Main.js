import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Button,
    TouchableHighlight,
    Image,TouchableOpacity,
    View,
    Text,
  } from "react-native";
import { useCallback, useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useNavigation } from '@react-navigation/native';


export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    const navigation = useNavigation();
    useEffect(() => {
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
    
        prepare();
      }, []);
      if (!appIsReady) {
        // Render the splash screen
        return (
            <View style={styles.containersplash}>
          <Image
            source={require('../assets/skylarks.png')} // Replace with the actual path to your splash image
            style={{ height:300,width:300,alignContent:'center'}}
          />
          </View>
        );
      }
  return (
    <View style={styles.parentcont}>
    <View style={styles.container}>
      <Image
        style={styles.pic}
        source={require("../assets/Saly-1intro-image.png")}
      ></Image>
    </View>
    <View>
      <Text style={styles.spce}></Text>
      <Text style={styles.text}>Discover Your</Text>
      <Text style={styles.text}>Own Dream House</Text>
      <Text style={styles.text1}>
        Pink is the color of a namesake flower that is a pale tint of red. It
        was first used as a color name in the late 17th century. According to
        surveys in Europe and the United States, pink is the color
      </Text>

      <Text style={styles.spce}></Text>
      <Text style={styles.spce}></Text>
      <Text style={styles.spce}></Text>
    </View>
    <View style={{ flexDirection: "row" }}>
    <TouchableOpacity onPress={() => navigation.navigate('Login')} > 
      
          <Text style={styles.Button}>Sign in</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
    <Text style={styles.Button1}>Register</Text>
    </TouchableOpacity>
    
      
    </View>
  </View>
  );
}

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
