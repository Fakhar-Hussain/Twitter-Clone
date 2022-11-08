import * as React from 'react';
import { Button, Text, TouchableOpacity, View , Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { HomeStack } from './Stack';
import { SettingStack } from './Stack';
import { NotificationStack } from './Stack';
import { ChatStack } from './Stack';




const Drawer = createDrawerNavigator();

export function MyDrawer({navigation}) {
  return (
        <Drawer.Navigator >
          <Drawer.Screen name="Home" component={HomeStack} 
            options={{
              headerTitle: () => <Icon name="twitter" color={"#1c9ff1"} size={32} /> ,
              headerStyle: {backgroundColor: "#fff",},
              headerTitleAlign: "center",
              headerRight: () => 
                <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={{width: 34,height: 34,marginRight: 10,borderRadius: 17 }}>
                  <Image style={{width: 34,height: 34,borderRadius: 17}} source={ require("../assets/maxresdefault.jpg") } />
                </TouchableOpacity>
              ,
            }}
          />
          <Drawer.Screen name="Chats" component={ChatStack} options={{headerShown: false}} />
          <Drawer.Screen name="Notify" component={NotificationStack} options={{headerShown: false}} />
          <Drawer.Screen name="Settings" component={SettingStack} options={{headerShown: false}} />
        </Drawer.Navigator>
  );
}



            //   drawerIcon: ({ color }) => (
            //     <View >
            //       <Icon
            //         name="shield-cross"
            //         size={34}
            //         color={color}
            //       />
            //     </View>    
            //   )