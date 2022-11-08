import React from "react";
import {View, Text, Button , TouchableOpacity} from "react-native";


export default function NotificationScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Sorry This Page is not Ready!</Text>
        <TouchableOpacity onPress={ () => navigation.navigate("Settings") }>
          <Text>Click me</Text>
        </TouchableOpacity>
      </View>
    );
  }
  