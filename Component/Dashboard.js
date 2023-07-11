
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Setting from './Setting';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    
     <Tab.Navigator
    
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Update"
        component={Setting}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <Icon name="notifications" color={color} size={size} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Setting}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Icon name="settings" size={30} color="#900"  />
          ),
        }}
      />
    </Tab.Navigator>
  
  );
};