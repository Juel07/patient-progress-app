import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

export default function Header({ title, navigation }) {
  const openMenu = () => {
    navigation.openDrawer({});
  };

  let [fontsLoaded] = useFonts({
    Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.header}>
        <MaterialIcons
          name="menu"
          size={35}
          onPress={openMenu}
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
    // height: '100%',
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'flex-end',
    justifyContent: "center",
    height: 55,
  },
  headerText: {
    fontFamily: "SemiBold",
    fontSize: 20,
    color: "black",
    // right: 20
  },
  icon: {
    position: "absolute",
    left: 16,
  },
});
