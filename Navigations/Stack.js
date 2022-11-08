import * as React from 'react';
import { Button, Text, TouchableOpacity, View , Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from '../Screens/HomeScreen';
import ChatScreen from '../Screens/ChatScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import SettingsScreen from '../Screens/SettingScreen';

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
      <Stack.Navigator  >
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            headerTitle: () => <Icon name="twitter" color={"#1c9ff1"} size={32} /> ,
            headerLeft: () => 
              <TouchableOpacity onPress={() =>  MyDrawer() }>
                <Icon name="menu" color={"#1c9ff1"} size={32} />
              </TouchableOpacity>
            ,
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerShown: false,
            headerTitleAlign: "center",
          }} 
          
        />
      </Stack.Navigator>
  );
}

export function SettingStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={SettingsScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chats" component={ChatScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} /> */}
      </Stack.Navigator>
  );
}
export function ChatStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Search" component={ChatScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} /> */}
      </Stack.Navigator>
  );
}
export function NotificationStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Chats" component={ChatScreen} /> */}
        {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
      </Stack.Navigator>
  );
}