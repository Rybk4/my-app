import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import ProfileScreen from './pages/ProfileScreen';
import NotificationsScreen from './pages/NotificationsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
      <Tab.Navigator>
       
        <Tab.Screen name="Home" component={HomeScreen} screenOptions={{   tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={
                  focused
                    ? require('../assets/images/icon.png')
                    : require('../assets/images/icon.png')
                }
                style={{ width: 24, height: 24, tintColor: color }}
              />
            ),}} 
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
      </Tab.Navigator>
   
  );
}
