import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useFonts, MouseMemoirs_400Regular } from '@expo-google-fonts/mouse-memoirs';
import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';


export default function HomeScreen({ navigation }) {

  let [Loaded] = useFonts({
    MouseMemoirs: require("../assets/fonts/MouseMemoirs-Regular.ttf"),
    Nunito: require("../assets/fonts/Nunito-Italic-VariableFont_wght.ttf"),
    Overpass: require("../assets/fonts/Overpass-Italic-VariableFont_wght.ttf")
  });

  if (!Loaded) {
    return null;
  }

  return (
    <View style={[styles.container, { zIndex: 1 }]}>

      <ScrollView style={{ zIndex: 2, minHeight: "100%" }}>
        <View style={styles.tweetView} >
          {/* Tweet Box */}
          <View style={styles.tweetFirstView}>
            <Image style={styles.tweetImg} source={require("../assets/maxresdefault.jpg")} />
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "column", marginBottom: 6 }}>
                  {/* Tweet User Name */}
                <Text style={styles.tweetTxt}>Fakhar</Text>

                  {/* Tweet User Post Time */}
                <View style={styles.tweetTimeView}>
                  <Text style={styles.tweetTimeTxt}>1 min.</Text>
                  <Icon
                    name="earth"
                    size={14}
                    color={"grey"}
                    />
                </View>
              </View>
                    {/* Tweet User Post */}
              <Text style={[styles.tweet]}>Coffee & Plants. best way to start the day Hello Dost Kiyaa Haal Chaal Subb Theeek Hai MN Bhi Theek Hun Bhaiyon</Text>
            </View>
          </View>

          {/* Comment Box */}

          <View style={styles.cmntList}>
            <TouchableOpacity style={styles.cmnt}>
              <Icon
                name="thumb-up"
                size={24}
                color={"grey"}
              />
              <Text style={{ paddingLeft: 5 }} >10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cmnt}>
              <Icon
                name="message-reply"
                size={24}
                color={"grey"}
              />
              <Text style={{ paddingLeft: 5 }} >10</Text>
            </TouchableOpacity>

          </View>
        </View>
        <View style={styles.tweetView} >
          {/* Tweet Box */}
          <View style={styles.tweetFirstView}>
            <Image style={styles.tweetImg} source={require("../assets/maxresdefault.jpg")} />
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "column", marginBottom: 6 }}>
                  {/* Tweet User Name */}
                <Text style={styles.tweetTxt}>Fakhar</Text>

                  {/* Tweet User Post Time */}
                <View style={styles.tweetTimeView}>
                  <Text style={styles.tweetTimeTxt}>1 min.</Text>
                  <Icon
                    name="earth"
                    size={14}
                    color={"grey"}
                    />
                </View>
              </View>
                    {/* Tweet User Post */}
              <Text style={[styles.tweet]}>Coffee & Plants. best way to start the day Hello Dost Kiyaa Haal Chaal Subb Theeek Hai MN Bhi Theek Hun Bhaiyon</Text>
            </View>
          </View>

          {/* Comment Box */}

          <View style={styles.cmntList}>
            <TouchableOpacity style={styles.cmnt}>
              <Icon
                name="thumb-up"
                size={24}
                color={"grey"}
              />
              <Text style={{ paddingLeft: 5 }} >10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cmnt}>
              <Icon
                name="message-reply"
                size={24}
                color={"grey"}
              />
              <Text style={{ paddingLeft: 5 }} >10</Text>
            </TouchableOpacity>

          </View>
        </View>
        <View style={styles.tweetView} >
          {/* Tweet Box */}
          <View style={styles.tweetFirstView}>
            <Image style={styles.tweetImg} source={require("../assets/maxresdefault.jpg")} />
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "column", marginBottom: 6 }}>
                  {/* Tweet User Name */}
                <Text style={styles.tweetTxt}>Fakhar</Text>

                  {/* Tweet User Post Time */}
                <View style={styles.tweetTimeView}>
                  <Text style={styles.tweetTimeTxt}>1 min.</Text>
                  <Icon
                    name="earth"
                    size={14}
                    color={"grey"}
                    />
                </View>
              </View>
                    {/* Tweet User Post */}
              <Text style={[styles.tweet]}>Coffee & Plants. best way to start the day Hello Dost Kiyaa Haal Chaal Subb Theeek Hai MN Bhi Theek Hun Bhaiyon</Text>
            </View>
          </View>

          {/* Comment Box */}

          <View style={styles.cmntList}>
            <TouchableOpacity style={styles.cmnt}>
              <Icon
                name="thumb-up"
                size={24}
                color={"grey"}
              />
              <Text style={{ paddingLeft: 5 }} >10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cmnt}>
              <Icon
                name="message-reply"
                size={24}
                color={"grey"}
              />
              <Text style={{ paddingLeft: 5 }} >10</Text>
            </TouchableOpacity>

          </View>
        </View>
        <View style={styles.tweetView} >
          {/* Tweet Box */}
          <View style={styles.tweetFirstView}>
            <Image style={styles.tweetImg} source={require("../assets/maxresdefault.jpg")} />
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "column", marginBottom: 6 }}>
                  {/* Tweet User Name */}
                <Text style={styles.tweetTxt}>Fakhar</Text>

                  {/* Tweet User Post Time */}
                <View style={styles.tweetTimeView}>
                  <Text style={styles.tweetTimeTxt}>1 min.</Text>
                  <Icon
                    name="earth"
                    size={14}
                    color={"grey"}
                    />
                </View>
              </View>
                    {/* Tweet User Post */}
              <Text style={[styles.tweet]}>Coffee & Plants. best way to start the day Hello Dost Kiyaa Haal Chaal Subb Theeek Hai MN Bhi Theek Hun Bhaiyon</Text>
            </View>
          </View>

          {/* Comment Box */}

          <View style={styles.cmntList}>
            <TouchableOpacity style={styles.cmnt}>
              <Icon
                name="thumb-up"
                size={24}
                color={"grey"}
              />
              <Text style={{ paddingLeft: 5 }} >10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cmnt}>
              <Icon
                name="message-reply"
                size={24}
                color={"grey"}
              />
              <Text style={{ paddingLeft: 5 }} >10</Text>
            </TouchableOpacity>

          </View>
        </View>
        <View style={styles.tweetView} >
          {/* Tweet Box */}
          <View style={styles.tweetFirstView}>
            <Image style={styles.tweetImg} source={require("../assets/maxresdefault.jpg")} />
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "column", marginBottom: 6 }}>
                  {/* Tweet User Name */}
                <Text style={styles.tweetTxt}>Fakhar</Text>

                  {/* Tweet User Post Time */}
                <View style={styles.tweetTimeView}>
                  <Text style={styles.tweetTimeTxt}>1 min.</Text>
                  <Icon
                    name="earth"
                    size={14}
                    color={"grey"}
                    />
                </View>
              </View>
                    {/* Tweet User Post */}
              <Text style={[styles.tweet]}>Coffee & Plants. best way to start the day Hello Dost Kiyaa Haal Chaal Subb Theeek Hai MN Bhi Theek Hun Bhaiyon</Text>
            </View>
          </View>

          {/* Comment Box */}

          <View style={styles.cmntList}>
            <TouchableOpacity style={styles.cmnt}>
              <Icon
                name="thumb-up"
                size={24}
                color={"grey"}
              />
              <Text style={{ paddingLeft: 5 }} >10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cmnt}>
              <Icon
                name="message-reply"
                size={24}
                color={"grey"}
              />
              <Text style={{ paddingLeft: 5 }} >10</Text>
            </TouchableOpacity>

          </View>
        </View>


      </ScrollView>

      <TouchableOpacity style={styles.cmntBox}>
        <Icon
          name="comment-text-outline"
          size={28}
          color={"grey"}
        />
      </TouchableOpacity>

    </View>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#999"
  },
  tweetView: {
    paddingBottom: 12,
    borderColor: "black",
    borderBottomWidth: 0.4,
    marginBottom: 6,
    backgroundColor: "#fff"
  },
  tweetFirstView: {
    marginLeft: 10,
    paddingTop: 12,
    flexDirection: "row"
  },
  tweetImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  tweetTxt: {
    color: "#000",
    fontSize: 16,
    width: 200,
    height: 30,
    paddingTop: 3,
    paddingLeft: 3,
    marginLeft: 8,
    fontWeight: "700",
    // fontFamily: "Overpass",
  },
  tweetTimeView: {
    flexDirection: "row",
    backgroundColor: "#fff", 
    marginTop: -8, 
    marginLeft: 8, 
    width: 70, 
    height: 25,
    alignItems: 'center'
  },
  tweetTimeTxt: {
    fontSize: 10, 
    marginLeft: 8, 
    marginRight: 3 
  },
  tweet: {
    color: "#000",
    fontSize: 22,
    width: 250,
    paddingLeft: 3,
    marginLeft: 10,
    // fontWeight: "bold",
    fontFamily: "Overpass",
    lineHeight: 30
  },




  cmntList: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    marginLeft: 70,
    width: 250
  },
  cmnt: {
    flexDirection: "row",
    borderColor: "black",
    borderRadius: 20,
    borderWidth: 0.3,
    backgroundColor: "#fafafa",
    height: 40,
    width: "43%",
    alignItems: "center",
    justifyContent: "center"
  },
  cmntBox: {
    zIndex: 4,
    bottom: 80,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
    borderRadius: 28,
    width: 55,
    height: 55,
    backgroundColor: '#fafafa',
    elevation: 10,
    borderColor: "black",
    borderWidth: 0.2
  },
})

