import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

import depression from "../assets/Illustrations/depression.png";
import healing from "../assets/Illustrations/healing.png";
import sadness from "../assets/Illustrations/sadness.png";
import talk from "../assets/Illustrations/talk.png";
import communication from "../assets/Illustrations/communication.png";
import team from "../assets/Illustrations/team.png";

export default function Support() {
  let [fontsLoaded] = useFonts({
    Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    Medium: require("../assets/fonts/Montserrat-Medium.ttf"),
    Light: require("../assets/fonts/Montserrat-Light.ttf"),
    Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity style={styles.inner} activeOpacity={0.8}>
            <Image source={depression} style={styles.illustration} />
            <Text style={styles.boxText}>Depression</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.inner} activeOpacity={0.8}>
            <Image source={sadness} style={styles.illustration}></Image>
            <Text style={styles.boxText}>Stress</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.inner} activeOpacity={0.8}>
            <Image source={healing} style={styles.illustration}></Image>
            <Text style={styles.boxText}>Anxiety</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.inner} activeOpacity={0.8}>
            <Image source={team} style={styles.illustration}></Image>
            <Text style={styles.boxText}>Charities</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.inner} activeOpacity={0.8}>
            <Image source={talk} style={styles.illustration}></Image>
            <Text style={styles.boxText}>Therapy and Counselling</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.inner} activeOpacity={0.8}>
            <Image source={communication} style={styles.illustration}></Image>
            <Text style={styles.boxText}>Support Groups</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    padding: 10,
    flexWrap: "wrap",
    backgroundColor: "#fff",
  },

  box: {
    width: "50%",
    height: "33.33%",
    padding: 10,
  },

  inner: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "grey",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 50,
    shadowRadius: 4,
    borderRadius: 15,
  },

  boxText: {
    fontFamily: "Regular",
    fontSize: 16,
    textAlign: "center",
    padding: 20,
  },

  illustration: {
    justifyContent: "center",
    height: 70,
    width: 70,
  },
});
