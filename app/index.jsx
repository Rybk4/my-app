import * as React from 'react';

import { View,SafeAreaView  } from 'react-native';
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
          tabBarLabelStyle: {
            paddingBottom: 5, 
          },
          tabBarIconStyle: {
            paddingTop: 5,
          },
          tabBarStyle: {
            paddingTop: 5, 
            paddingBottom: 5, 
            height: 60, 
          },
        })}
        
    >
       
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Главная' , title:"Главная" , headerStyle:{ } }} /> 
        
        <Tab.Screen name="Qr" component={SettingsScreen} options={{ tabBarLabel: 'App-Qr' , title:"Главная"}} />
        <Tab.Screen name="Notifications" component={ProfileScreen} options={{ tabBarLabel: 'Сообщения' , title:"Сообщения" }} />
        <Tab.Screen name="Servise" component={NotificationsScreen} options={{ tabBarLabel: 'Сервисы' , title:"Сервисы"}} />
      </Tab.Navigator>
     
  );
}
