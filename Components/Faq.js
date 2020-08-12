import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  StatusBar,
} from "react-native";

// importing fonts
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

// importing icons
import add from "../assets/add.png";
import line from "../assets/line3.png";

export default function Faq() {
  // fonts load
  let [fontsLoaded] = useFonts({
    Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  // using functions to create toggle effect
  const [state, setState] = useState(true);
  function toggle() {
    setState(!state);
  }

  const [state2, setState2] = useState(true);
  function toggle2() {
    setState2(!state2);
  }

  const [state3, setState3] = useState(true);
  function toggle3() {
    setState3(!state3);
  }

  const [state4, setState4] = useState(true);
  function toggle4() {
    setState4(!state4);
  }

  const [state5, setState5] = useState(true);
  function toggle5() {
    setState5(!state5);
  }

  // check if fonts are loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ScrollView style={styles.wrapper}>
        <StatusBar backgroundColor="#32afa9" barStyle="light-content" />
        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>
            Who is at a risk of developing severe illness?
          </Text>
          <View>
            <Text style={styles.bodyTxt}>
              {state
                ? ""
                : "Those at high risk from coronavirus include eldery people and individuals with a compromised immune system."}
            </Text>
          </View>
          {/* <Button title="Test" onPress={handleAnswer}/> */}
        </View>

        <View style={styles.addBtn}>
          <TouchableHighlight underlayColor="#fff" onPress={toggle}>
            <Image source={add} />
          </TouchableHighlight>
        </View>

        <View style={styles.lineCont}>
          <Image source={line} />
        </View>

        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>
            How long does it take to completely recover?
          </Text>
          <View>
            <Text style={styles.bodyTxt}>
              {state2
                ? ""
                : "The recovery can last from one to two weeks and varies from individual to individual."}
            </Text>
          </View>
          {/* <Button title="Test" onPress={handleAnswer}/> */}
        </View>

        <View style={styles.addBtn}>
          <TouchableHighlight underlayColor="#fff" onPress={toggle2}>
            <Image source={add} />
          </TouchableHighlight>
        </View>

        <View style={styles.lineCont}>
          <Image source={line} />
        </View>

        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>
            How will my family member be treated?{" "}
          </Text>
          <View>
            <Text style={styles.bodyTxt}>
              {state3
                ? ""
                : "The treatment will depend on the condition of the individual. At present time, there is no specific medication for treating COVID-19. Usually, the treatment involves receiving supplemental oxygen and oral antibiotics."}
            </Text>
          </View>
          {/* <Button title="Test" onPress={handleAnswer}/> */}
        </View>

        <View style={styles.addBtn}>
          <TouchableHighlight underlayColor="#fff" onPress={toggle3}>
            <Image source={add} />
          </TouchableHighlight>
        </View>

        <View style={styles.lineCont}>
          <Image source={line} />
        </View>

        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>
            Are pregnant women at high risk of coronovirus?
          </Text>
          <View>
            <Text style={styles.bodyTxt}>
              {state4
                ? ""
                : "There's no evidence that pregnant women are more likely to get seriously ill from coronavirus. But pregnant women have been included in the list of people at moderate risk (clinically vulnerable) as a precaution. This is because pregnant women can sometimes be more at risk from viruses like flu"}
            </Text>
          </View>
          {/* <Button title="Test" onPress={handleAnswer}/> */}
        </View>

        <View style={styles.addBtn}>
          <TouchableHighlight underlayColor="#fff" onPress={toggle4}>
            <Image source={add} />
          </TouchableHighlight>
        </View>

        <View style={styles.lineCont}>
          <Image source={line} />
        </View>

        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>
            Is mother-to-child transmission possible?{" "}
          </Text>
          <View>
            <Text style={styles.bodyTxt}>
              {state5
                ? ""
                : "Mother-to-child transmission is unlikely, however after your loved one gives birth, the newborn is susceptible to person-to-person spread."}
            </Text>
          </View>
          {/* <Button title="Test" onPress={handleAnswer}/> */}
        </View>

        <View style={styles.addBtnLast}>
          <TouchableHighlight underlayColor="#fff" onPress={toggle5}>
            <Image source={add} />
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

// styles
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 30,
    flexDirection: "column",
    //  justifyContent: 'flex-start',
    backgroundColor: "#fff",
  },

  addBtn: {
    marginTop: 5,
    marginLeft: "90%",
  },

  addBtnLast: {
    marginTop: 5,
    marginLeft: "90%",
    marginBottom: 50,
  },

  bodyTxt: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "Regular",
  },

  bodyTxtBold: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "Bold",
  },

  lineCont: {
    alignItems: "center",
    marginTop: 18,
    marginBottom: 17,
  },
});
