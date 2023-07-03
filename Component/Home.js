import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

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
    <View style={styles.container}>
       <Text>SplashScreen Demo</Text>
      <StatusBar style="auto" />
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
