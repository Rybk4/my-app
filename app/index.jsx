import * as React from 'react';

 
import icons from '../constants/icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StatusBar,View} from 'react-native';

import HomeScreen from './pages/HomeScreen';
import ServiceScreen from './pages/ServiceScreen';
import QrScreen from './pages/QrScreen';
import NotificationsScreen from './pages/NotificationsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={{flex:1,  }}>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    
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
        
        <Tab.Screen name="Qr" component={QrScreen} options={{ tabBarLabel: 'App-Qr' , title:"Qr"}} />

        <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ tabBarLabel: 'Сообщения' , title:"Сообщения" }} />

        <Tab.Screen name="Servise" component={ServiceScreen} options={{ tabBarLabel: 'Сервисы' , title:"Сервисы"}} />

      </Tab.Navigator>
    </View>
  );
}
