import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import logo from "../assets/logo.png";

// importing fonts
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

export default function OnBoardingTwo({ navigation }) {
  const pressHandler2 = () => {
    navigation.navigate("Welcome-3");
  };

  // fonts load
  let [fontsLoaded] = useFonts({
    Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    Bold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  // check if fonts are loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#32afa9" barStyle="light-content" />
        <Image source={logo} style={{ width: 100, marginBottom: 10 }} />
        <Text style={styles.headings}>Track progress</Text>
        <Text style={styles.textBox}>
          You can add your loved ones and see how they are doing in real time.
          You will receive a notification everytime there's a new update in the
          Feed.
        </Text>

        <View style={styles.dots}>
          <View style={styles.circle}></View>
          <View style={styles.circleFirst}></View>
          <View style={styles.circle}></View>
        </View>

        <View style={styles.btn}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 30,
              borderColor: "#58ACA8",
              borderWidth: 2,
              borderRadius: 10,
              padding: 10,
            }}
            onPress={pressHandler2}
          >
            <Text
              style={{ fontSize: 18, fontFamily: "Bold", color: "#58ACA8" }}
            >
              Next
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => navigation.goBack()}
          >
            <Text
              style={{ fontSize: 18, fontFamily: "Bold", color: "#58ACA8" }}
            >
              Previous
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingLeft: 37,
    paddingRight: 38,
  },

  textBox: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Regular",
  },

  headings: {
    fontSize: 23,
    paddingBottom: 6,
    fontFamily: "Bold",
  },

  circle: {
    width: 9,
    height: 9,
    borderRadius: 100 / 2,
    backgroundColor: "#C4C4C4",
    margin: 3,
    marginTop: 45,
  },

  circleFirst: {
    width: 9,
    height: 9,
    borderRadius: 100 / 2,
    backgroundColor: "#58ACA8",
    margin: 3,
    marginTop: 45,
  },

  dots: {
    flexDirection: "row",
  },

  btn: {
    marginTop: 20,
  },
});
