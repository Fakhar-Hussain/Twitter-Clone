import React from "react";
import {View, Text, Button , TouchableOpacity} from "react-native";



export default function ChatScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Sorry This Page is not Ready!</Text>
        <TouchableOpacity onPress={ () => navigation.navigate("Notify") }>
            <Text>Click me</Text>
          </TouchableOpacity>
      </View>
    );
  }