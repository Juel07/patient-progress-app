import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';

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

  const [thirdAnswer, setThirdAnswer] = useState('');
  const handleThirdAnswer = () => setThirdAnswer('The treatment will depend on the condition of the individual. At present time, there is no specific medication for treating COVID-19. Usually, the treatment involves receiving supplemental oxygen and oral antibiotics.');

  const [fourthAnswer, setFourthAnswer] = useState('');
  const handleFourthAnswer = () => setFourthAnswer('According to the latest information it seems like pregnant and non-pregnant adults have the same risk of being infected with COVID-19.');

  const [fifthAnswer, setFifthAnswer] = useState('');
  const handleFifthAnswer = () => setFifthAnswer('Mother-to-child transmission is unlikely, however after your loved one gives a birth, the newborn is susceptible to person-to-person spread.');

  // check if fonts are loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <ScrollView style={styles.wrapper}>

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


        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>3. How will my family member be treated? </Text>
          <View><Text style={styles.bodyTxt}>{thirdAnswer}</Text></View>
          {/* <Button title="Test" onPress={handleAnswer}/> */}
        </View>

        <View style={styles.addBtn}>
          <TouchableHighlight underlayColor='#fff' onPress={handleThirdAnswer}>
            <Image source={add} />
          </TouchableHighlight>
        </View>

        <View style={styles.lineCont}>
          <Image source={line} />
        </View>


        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>4. Do pregnant individuals have higher chances of getting sick from COVID-19?</Text>
          <View><Text style={styles.bodyTxt}>{fourthAnswer}</Text></View>
          {/* <Button title="Test" onPress={handleAnswer}/> */}
        </View>

        <View style={styles.addBtn}>
          <TouchableHighlight underlayColor='#fff' onPress={handleFourthAnswer}>
            <Image source={add} />
          </TouchableHighlight>
        </View>

        <View style={styles.lineCont}>
          <Image source={line} />
        </View>


        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>5. Is mother-to-child transmission possible? </Text>
          <View><Text style={styles.bodyTxt}>{fifthAnswer}</Text></View>
          {/* <Button title="Test" onPress={handleAnswer}/> */}
        </View>

        <View style={styles.addBtn}>
          <TouchableHighlight underlayColor='#fff' onPress={handleFifthAnswer}>
            <Image source={add} />
          </TouchableHighlight>
        </View>

        <View style={styles.lineCont}>
          <Image source={line} />
        </View>
      </ScrollView>
    );
  }
};


// styles 
const styles = StyleSheet.create({
 wrapper:{
   flex: 1,
   padding: 30,
   flexDirection: 'column',
  //  justifyContent: 'flex-start',
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