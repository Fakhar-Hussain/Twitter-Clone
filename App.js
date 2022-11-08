
import * as React from 'react';
import { Button, Text, TouchableOpacity, View , Image, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import AppLoading from 'expo-app-loading';
// import { useFonts, MouseMemoirs_400Regular } from '@expo-google-fonts/mouse-memoirs';
  
//   // console.disableYellowBox = true;
  // LogBox.ignoreAllLogs();//Ignore all log notifications


import HomeScreen from './Screens/HomeScreen';
import ChatScreen from './Screens/ChatScreen';
import NotificationScreen from './Screens/NotificationScreen';
import SettingsScreen from './Screens/SettingScreen';










// const Drawer = createDrawerNavigator();

// function MyDrawer({navigation}) {
//   return (
//         <Drawer.Navigator >
//           <Drawer.Screen name="Home" component={HomeStack} 
//             options={{
//               headerTitle: () => <Icon name="twitter" color={"#1c9ff1"} size={32} /> ,
//               headerStyle: {backgroundColor: "#fff",},
//               headerTitleAlign: "center",
//               // headerRight: () => 
//               //   <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={{width: 34,height: 34,marginRight: 10,borderRadius: 17 }}>
//               //     <Image style={{width: 34,height: 34,borderRadius: 17}} source={ require("./assets/maxresdefault.jpg") } />
//               //   </TouchableOpacity>
//               // ,
//               // drawerIcon: ({ color }) => (
//               //   <View >
//               //     <Icon
//               //       name="shield-cross"
//               //       size={34}
//               //       color={color}
//               //     />
//               //   </View>    
//               // )
//             }}
//           />
//           <Drawer.Screen name="Chats" component={ChatStack} options={{headerShown: false}} />
//           <Drawer.Screen name="Notify" component={NotificationStack} options={{headerShown: false}} />
//           <Drawer.Screen name="Settings" component={SettingStack} options={{headerShown: false}} />
//         </Drawer.Navigator>
//   );
// }





















const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
      <Stack.Navigator  >
        <Stack.Screen name="Homee" component={HomeScreen} 
          options={{
            // headerShown: false,
            headerTitle: () => <Icon name="twitter" color={"#1c9ff1"} size={32} /> ,
            // headerLeft: () => 
            //   <TouchableOpacity onPress={() =>  MyDrawer() }>
            //     <Icon name="menu" color={"#1c9ff1"} size={32} />
            //   </TouchableOpacity>
            // ,
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitleAlign: "center",
          }} 
          
        />
      </Stack.Navigator>
  );
}
 function SettingStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={SettingsScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chats" component={ChatScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} /> */}
      </Stack.Navigator>
  );
}
 function ChatStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Search" component={ChatScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} /> */}
      </Stack.Navigator>
  );
}
 function NotificationStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Chats" component={ChatScreen} /> */}
        {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
      </Stack.Navigator>
  );
}























const Tab = createBottomTabNavigator();
export default function App() {

  // let [fontsLoaded] = useFonts({
  //   MouseMemoirs_400Regular,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }


  return (
    <NavigationContainer >
      
      <Tab.Navigator 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#1c9ff1",
          tabBarStyle:{
            height: 55,
            paddingBottom: 8,
          },
          // tabBarLabelStyle: {
          //   fontFamily: "MouseMemoirs_400Regular"
          // }

        }}
        >

        <Tab.Screen name="Home1" component={HomeStack} 
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
  );}































  // import React from 'react';
  // import { View, Text } from 'react-native';
  // import AppLoading from 'expo-app-loading';
  // import { useFonts, MouseMemoirs_400Regular } from '@expo-google-fonts/mouse-memoirs';
  
  // console.disableYellowBox = true;
  
  
  // export default function App() {
    // let [fontsLoaded] = useFonts({
    //   MouseMemoirs_400Regular,
    // });
  
    // if (!fontsLoaded) {
    //   return <AppLoading />;
    // }
  
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <Text style={{ fontFamily: 'MouseMemoirs_400Regular', fontSize: 40 }}>Inter Black</Text>
  //     </View>
  //   );
  // }