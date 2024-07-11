import * as React from 'react';


import icons from '../constants/icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import ProfileScreen from './pages/ProfileScreen';
import NotificationsScreen from './pages/NotificationsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
    <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? icons[route.name].active : icons[route.name].inactive;
            return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
        })}
    >
       
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Главная' }} /> 
        
        <Tab.Screen name="Qr" component={SettingsScreen} options={{ tabBarLabel: 'App-Qr' }} />
        <Tab.Screen name="Notifications" component={ProfileScreen} options={{ tabBarLabel: 'Сообщения' }} />
        <Tab.Screen name="Servise" component={NotificationsScreen} options={{ tabBarLabel: 'Сервисы' }} />
      </Tab.Navigator>
   
  );
}
