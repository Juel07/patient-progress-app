import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import logo from '../assets/logo.png';

// importing fonts 
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export default function OnBoardingOne({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('Welcome-2')
  }

  // fonts load
  let [fontsLoaded] = useFonts({
    'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Bold': require('../assets/fonts/Montserrat-SemiBold.ttf')
  });

  // check if fonts are loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (

      <View style={styles.container}>
        <StatusBar backgroundColor='#32afa9' barStyle="light-content" />
        <Image source={logo} style={{ width: 100, marginBottom: 10 }} />
        <Text style={styles.headings}>Welcome</Text>
        <Text style={styles.textBox}>We know now is a difficult time and the healthcare staff is busy. With Patient Progress you can keep track on how your relatives are doing.</Text>

        <View style={styles.dots}>
          <View style={styles.circleFirst}></View>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
        </View>

        {/* <Button title="Next" color='#58ACA8' textStyle={{fontFamily: 'Bold'}}/> */}

        {/* to be used as button to get more styling control */}

        <View style={styles.btn}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={pressHandler}>
            <Text style={{ fontSize: 18, fontFamily: 'Bold', color: '#58ACA8' }}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('MainScreen')}>
            <Text style={{ fontSize: 18, fontFamily: 'Bold', color: '#58ACA8' }}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: 37,
    paddingRight: 38,
  },

  textBox: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Regular'
  },

  headings: {
    fontSize: 23,
    paddingBottom: 6,
    fontFamily: 'Bold'
  },

  circle: {
    width: 9,
    height: 9,
    borderRadius: 100 / 2,
    backgroundColor: '#C4C4C4',
    margin: 3,
    marginTop: 45,
  },

  circleFirst: {
    width: 9,
    height: 9,
    borderRadius: 100 / 2,
    backgroundColor: '#58ACA8',
    margin: 3,
    marginTop: 45,
  },

  dots: {
    flexDirection: 'row',
  },

  btn: {
    marginTop: 20
  }


});
