import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// importing fonts
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

export default function CustomButton({ text, onPress }) {
  // fonts load
  let [fontsLoaded] = useFonts({
    Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  // check if fonts are loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    height: 50,
    justifyContent: "center",
    borderRadius: 40,
    paddingVertical: 5,
    paddingHorizontal: 70,
    backgroundColor: "#32afa9",
    elevation: 12,
    shadowColor: "#a4d4ae",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 50,
    shadowRadius: 4,
  },
  buttonText: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 2.5,
  },
});
