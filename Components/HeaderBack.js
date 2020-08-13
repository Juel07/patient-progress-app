import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

export default function HeaderBack({ title, navigation }) {
  // const goBack = () => {
  //   navigation.navigate({});
  // }

  let [fontsLoaded] = useFonts({
    Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          onPress={() => navigation.goBack()}
          size={23}
          style={styles.icon}
        />
        <View>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: Dimensions.get("screen").width,
    elevation: 0,
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: "SemiBold",
    fontSize: 20,
    color: "black",
  },
  icon: {
    position: "absolute",
    left: 15,
    // padding: 10,
    backgroundColor: "#fff",
  },
});
