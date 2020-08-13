import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

const SignUpScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    Medium: require("../assets/fonts/Montserrat-Medium.ttf"),
    Light: require("../assets/fonts/Montserrat-Light.ttf"),
    Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
  });

  const [data, setData] = React.useState({
    number: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        number: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        number: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#32afa9" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Sign Up</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
                marginBottom: 10,
              },
            ]}
          >
            NHS Number
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="black" size={20} />
            <TextInput
              placeholder="10-digit number"
              style={styles.textInput}
              maxLength={10}
              keyboardType="number-pad"
              selectionColor="#32afa9"
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
                marginBottom: 10,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="black" size={20} />
            <TextInput
              placeholder=""
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              selectionColor="#32afa9"
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
                marginBottom: 10,
              },
            ]}
          >
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="black" size={20} />
            <TextInput
              placeholder=""
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              selectionColor="#32afa9"
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.agreement}>
              By signing up, you agree to our
            </Text>
            <Text style={[styles.color_textPrivate]}> Terms of service</Text>
            <Text style={styles.agreement}> and</Text>
            <Text style={[styles.color_textPrivate]}> Privacy policy</Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Welcome-1")}
              style={styles.signIn}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                Create Account
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
              style={[
                styles.signIn,
                {
                  marginTop: 15,
                },
              ]}
            >
              <Text style={[styles.textSign, {}]}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#32afa9",
  },
  header: {
    alignItems: "flex-end",
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingBottom: 50,
    fontFamily: "SemiBold",
  },

  footer: {
    flex: 7,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
  },
  text_header: {
    color: "#fff",
    fontFamily: "SemiBold",
    fontSize: 28,
  },
  text_footer: {
    color: "black",
    fontSize: 16,
    fontFamily: "Medium",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 10,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "grey",
    fontFamily: "Light",
  },
  buttons: {
    alignItems: "center",
    margin: 20,
  },
  signIn: {
    width: "60%",
    height: 50,
    justifyContent: "center",
    borderRadius: 40,
    color: "#ffff",
    lineHeight: 10,
    letterSpacing: 2.5,
    marginTop: 10,
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
  textSign: {
    color: "white",
    fontSize: 16,
    fontFamily: "Bold",
    textAlign: "center",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "center",
    lineHeight: 2,
  },
  agreement: {
    fontFamily: "Regular",
    color: "grey",
    fontSize: 14,
  },
  color_textPrivate: {
    color: "grey",
    fontFamily: "SemiBold",
  },
});
