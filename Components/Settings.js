import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { TouchableRipple, Switch } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

import { faBell } from "@fortawesome/free-solid-svg-icons";
// import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Settings = ({ navigation }) => {
  // const [isDarkTheme, setIsDarkTheme] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkTheme(!isDarkTheme);
  // }

  const [isNotif, setIsNotif] = useState(false);

  const toggleNotif = () => {
    setIsNotif(!isNotif);
  };

  let [fontsLoaded] = useFonts({
    Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    Bold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    Medium: require("../assets/fonts/Montserrat-Medium.ttf"),
  });

  // check if fonts are loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#32afa9" barStyle="light-content" />

        {/*Profile name and Avatar*/}

        <View style={styles.profileContainer}>
          <View>
            <Text style={styles.profile}>Profile</Text>
            <Text style={styles.johnDoe}>John Doe</Text>
          </View>
          <Image
            source={require("../assets/JohnDoe.png")}
            resizeMode="contain"
            style={styles.profileAvatar}
          ></Image>
        </View>

        {/*Menu List*/}

        <View style={styles.menuContainer}>
          <View style={styles.menuLine}></View>
          <View style={styles.menuTopItems}>
            <FontAwesomeIcon icon={faBell} style={styles.menuIcons} size={25} />
            <Text style={styles.menuTopText}>Notifications</Text>
            <TouchableRipple
              onPress={() => {
                toggleNotif();
              }}
            >
              <View pointerEvents="none">
                <Switch
                  style={styles.switch}
                  value={isNotif}
                  trackColor={{ false: "#767577", true: "#58ACA8" }}
                  thumbColor={isNotif ? "#32afa9" : "#393b3a"}
                />
              </View>
            </TouchableRipple>
          </View>
          {/* <View style={styles.menuTopItems}>
            <FontAwesomeIcon icon={faMobile} style={styles.menuIcons} size={25} />
            <Text style={styles.menuTopText}>Dark Theme</Text>
            <TouchableRipple onPress={() => { toggleTheme() }}>
              <View pointerEvents="none">
                <Switch
                  style={styles.switch}
                  value={isDarkTheme}
                  trackColor={{ false: "#767577", true: "#58ACA8" }}
                  thumbColor={isDarkTheme ? "#32afa9" : "#393b3a"} />
              </View>
            </TouchableRipple> 
            </View>*/}

          <View style={styles.menuLine}></View>
          <TouchableOpacity
            style={styles.menuItems}
            onPress={() => navigation.navigate("About")}
          >
            <FontAwesomeIcon
              icon={faQuestionCircle}
              style={styles.menuIcons}
              size={25}
            />
            <Text style={styles.menuText}>About</Text>
          </TouchableOpacity>

          <View style={styles.menuLine}></View>
          <View style={styles.menuItems}>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              style={styles.menuIcons}
              size={25}
            />
            <Text style={styles.menuText}>Report</Text>
          </View>

          <View style={styles.menuLine}></View>
          <TouchableOpacity
            style={styles.menuItems}
            onPress={() => navigation.navigate("SignInScreen")}
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              style={styles.menuIcons}
              size={25}
            />
            <Text style={styles.menuText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  //Profile Avatar

  profileContainer: {
    padding: 20,
    width: "100%",
    height: 147,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 25,
    marginBottom: 10,
    flex: 1,
  },
  profileAvatar: {
    width: 120,
    height: 120,
    marginTop: -10,
    marginRight: 20,
  },

  //Profile Details

  profile: {
    color: "#121212",
    fontSize: 18,
    fontFamily: "SemiBold",
    marginTop: 30,
    marginRight: 20,
    textAlign: "right",
  },
  johnDoe: {
    color: "#393b3a",
    fontSize: 18,
    fontFamily: "Medium",
    marginTop: 11,
    marginRight: 20,
    textAlign: "right",
  },

  //Settings Menu

  menuContainer: {
    flex: 3,
  },

  menuLine: {
    width: 300,
    height: 3,
    borderTopWidth: 1,
    borderTopColor: "#58ACA8",
    alignSelf: "center",
    marginBottom: 25,
  },

  menuTopItems: {
    flexDirection: "row",
    marginLeft: 60,
    marginRight: 60,
    justifyContent: "space-between",
  },

  menuItems: {
    flexDirection: "row",
    marginLeft: 60,
    marginRight: 60,
  },

  menuIcon: {
    width: 20,
    height: 20,
  },

  menuTopText: {
    fontFamily: "Regular",
    fontSize: 16,
    marginBottom: 25,
  },

  menuText: {
    fontFamily: "Regular",
    fontSize: 16,
    marginLeft: 50,
    marginBottom: 25,
    textAlign: "center",
  },
});
