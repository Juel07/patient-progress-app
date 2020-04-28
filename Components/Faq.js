import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

// importing fonts 
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

// importing icons 
import add from '../assets/add.png';
import line from '../assets/line3.png';


export default function Faq() {

  // fonts load
  let [fontsLoaded] = useFonts({
    'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  // hooks for buttons 
  const [answer, setAnswer] = useState('');
  const handleAnswer = () => setAnswer('Usually eldery people and individuals with a compromised immune system.');

  const [secondAnswer, setSecondAnswer] = useState('');
  const handleSecondAnswer = () => setSecondAnswer('The recovery can last from one to two weeks and varies from individual to individual.');

  // check if fonts are loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <View style={styles.wrapper}>

        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>1. Who is at a risk of developing severe illness?</Text>
          <View><Text style={styles.bodyTxt}>{answer}</Text></View>
          {/* <Button title="Test" onPress={handleAnswer}/> */}
        </View>

        <View style={styles.addBtn}>
          <TouchableHighlight underlayColor='#fff' onPress={handleAnswer}>
            <Image source={add} />
          </TouchableHighlight>
        </View>

        <View style={styles.lineCont}>
          <Image source={line} />
        </View>


        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>2. How long it takes to fully recover?</Text>
          <View><Text style={styles.bodyTxt}>{secondAnswer}</Text></View>
          {/* <Button title="Test" onPress={handleAnswer}/> */}
        </View>

        <View style={styles.addBtn}>
          <TouchableHighlight underlayColor='#fff' onPress={handleSecondAnswer}>
            <Image source={add} />
          </TouchableHighlight>
        </View>

        <View style={styles.lineCont}>
          <Image source={line} />
        </View>
      </View>
    );
  }
};


// styles 
const styles = StyleSheet.create({
 wrapper:{
   padding: 30,
   flexDirection: 'column',
   justifyContent: 'space-between',
   backgroundColor: '#fff'
 },
 
  addBtn: {
    marginTop: 5,
    marginLeft: '90%'
  },

  bodyTxt: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Regular'
  },

  bodyTxtBold: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Bold'
  },

  lineCont:
  {
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 17
  }


});