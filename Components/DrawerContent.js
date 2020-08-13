import React from "react";
import { View, StyleSheet } from "react-native";
import { Title, Caption, Paragraph, Drawer, Avatar } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import JohnDoe from "../assets/JohnDoe.png";

import { Ionicons } from "@expo/vector-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

export function DrawerContent(props) {
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
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={{ paddingLeft: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 15,
                }}
              >
                <View style={{ flexDirection: "column" }}>
                  <Title style={styles.name}>John Doe</Title>
                  <Caption style={styles.caption}>Birmingham</Caption>
                </View>
                <Avatar.Image source={JohnDoe} size={70} />
              </View>
            </View>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                inactiveTintColor="#fff"
                icon={({ color, size }) => (
                  <FontAwesomeIcon
                    icon={faUserFriends}
                    color={color}
                    size={size}
                  />
                )}
                label="Home"
                labelStyle={{ fontFamily: "Medium", fontSize: 16 }}
                onPress={() => {
                  props.navigation.navigate("Contacts");
                }}
              />

              <DrawerItem
                inactiveTintColor="#fff"
                activeBackgroundColor="#58ACA8"
                icon={({ color, size }) => (
                  <Ionicons
                    name="md-information-circle-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="About"
                labelStyle={{ fontFamily: "Medium", fontSize: 16 }}
                onPress={() => {
                  props.navigation.navigate("About");
                }}
              />
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            inactiveTintColor="#fff"
            activeBackgroundColor="#58ACA8"
            icon={({ color, size }) => (
              <Ionicons name="md-exit" color={color} size={size} />
            )}
            label="Sign Out"
            labelStyle={{ fontFamily: "Medium", fontSize: 16 }}
            onPress={() => {
              props.navigation.navigate("SignInScreen");
            }}
          />
        </Drawer.Section>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    marginTop: 3,
    fontFamily: "SemiBold",
  },
  caption: {
    fontSize: 15,
    lineHeight: 15,
    fontFamily: "Medium",
  },

  section: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingLeft: 20,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 15,
    fontFamily: "Medium",
    marginRight: 5,
  },
  drawerSection: {
    marginTop: 15,
    backgroundColor: "#32afa9",
    paddingLeft: 20,
  },

  bottomDrawerSection: {
    paddingLeft: 20,
    marginBottom: 15,
    backgroundColor: "#32afa9",
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
