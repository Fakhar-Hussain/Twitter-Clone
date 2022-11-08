import * as React from 'react';
import { Button, Text, TouchableOpacity, View , Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { SettingStack } from './Stack';
import { NotificationStack } from './Stack';
import { ChatStack } from './Stack';

import { MyDrawer } from './Drawer';


const Tab = createBottomTabNavigator();
export function Tabs() {
  return (
    <NavigationContainer >   
      <Tab.Navigator 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#1c9ff1",
          tabBarStyle:{
            height: 55,
            paddingBottom: 8,
          }
        }}
        >

        <Tab.Screen name="Home1" component={MyDrawer} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-circle" color={color} size={28} />
            ),   
          }}
        />

        <Tab.Screen name="Chat" component={ChatStack} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="magnify" color={color} size={28} />
            ),   
          }} 
        />

        <Tab.Screen name="Notification" component={NotificationStack} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="bell" color={color} size={size} />
            ),   
          }} 
        />

        <Tab.Screen name="Setting" component={SettingStack} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="email" color={color} size={size} />
            ),   
          }} 
        />

      </Tab.Navigator>
    </NavigationContainer>
  )}