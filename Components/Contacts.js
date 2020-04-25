
// const Contacts  = ({ navigation }) => {
//     return (
//       <View style={styles.container}><Text>Contacts</Text>
//       <Button
//         title="Go to Feed"
// onPress={() => navigation.navigate('Feed')}
//       />
//       </View>
//     );
// };


import React, { Component, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, CheckBox, Modal, TextInput, } from "react-native";

import Feed from './Feed';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const Contacts = ({ navigation }) => {

  //Pop-up
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTwoOpen, setModalTwoOpen] = useState(false);

  // fonts load
  let [fontsLoaded] = useFonts({
    'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Bold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
  });

  // check if fonts are loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {


    return (
      <View style={styles.container}>

        {/* THIS IS THE USER INFO */}
        <View style={styles.user}>

          <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', padding: '1.5%' }}>
            <Image style={styles.userImage} resizeMode='contain' source={require('../assets/JohnDoe.png')} />
          </View>


          <View style={styles.userInfo}>
            <View style={styles.userContainer}>
              <Text style={styles.userName}>John Doe</Text>
            </View>

            <View style={styles.userContainer}>
              <Text style={styles.userNo}>NHS NUMBER: 000 000 0000</Text>
            </View>

          </View>

        </View>
        {/* THIS IS THE USER INFO */}

        {/* THIS IS THE BUTTON */}
        <View style={{ padding: '2%' }}>
          <TouchableOpacity style={styles.button} onPress={() => setModalOpen(true)}>
            <View style={styles.buttonTitle}>
              <Text style={styles.buttonText}>My relatives/friends</Text>
            </View>

            <View style={styles.buttonImage}>
              <Image style={styles.buttonAdd} resizeMode='contain' source={require('../assets/Vector.png')} />
            </View>


            <Modal transparent={true} visible={modalOpen} animationType='fade'>
              <View style={styles.popupBack}>
                <View style={styles.popup}>

                  <View style={styles.popupText}>
                    <Text style={{ fontFamily: 'Bold', fontSize: 23 }}>New Patient</Text>
                  </View>

                  <View style={styles.popupText}>
                    <Text style={{ fontFamily: 'Regular', fontSize: 18 }}>NHS Number:</Text>
                    <TextInput style={styles.popupInput} minLength={10} maxLength={10}></TextInput>
                  </View>

                  <View style={styles.notify}>
                    <Text style={{ fontFamily: 'Regular', fontSize: 15 }}>Notify me if my relative{"\n"}           passes away</Text>
                    <CheckBox />
                  </View>

                  <View style={styles.popupButtons}>
                    <TouchableOpacity onPress={() => setModalOpen(false)}>
                      <View style={styles.popupAdd}>
                        <Text style={{ fontFamily: 'Medium', fontSize: 16, color: 'white' }}>Add</Text>
                      </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => setModalOpen(false)}>
                      <View style={styles.popupCancel}>
                        <Text style={{ fontFamily: 'Medium', fontSize: 16, color: 'white' }}>Cancel</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
            </Modal>

          </TouchableOpacity>

        </View>

        {/* THIS IS THE USER BUTTON */}


        {/* THIS IS THE USER RELATIVE CODE */}
        <View>
          <TouchableOpacity style={styles.relativeCards} onPress={() => navigation.navigate('Feed')}

          >

            <View style={styles.relative}>
              <Text style={styles.relativeName}>Jane Doe</Text>
            </View>


            <View style={styles.relativeIcon}>
              <Image style={styles.relatveImage} source={require('../assets/Vectorperson.png')} />
            </View>


            <View>
              <Text style={styles.relativeHospital}>St.George&#39;s Hospital{"\n"}Last updated: 14th June 10:20</Text>
            </View>

          </TouchableOpacity>

          <View style={styles.relativeCards}>
            <View style={styles.relative}>
              <Text style={styles.relativeName}>Jill Doe</Text>
            </View>

            <View style={styles.relativeIcon}>
              <Image style={styles.relatveImage} source={require('../assets/Vectorperson.png')} />
            </View>

            <View>
              <Text style={styles.relativeHospital}>St.George&#39;s Hospital{"\n"}Last updated: 18th June 20:00</Text>
            </View>

          </View>
        </View>
        {/* THIS IS THE USER RELATIVE CODE */}

      </View>
    );
  }
}

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

  user: {
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'flex-end',
    paddingBottom: '0.5%'
  },
  userImage: {
    width: 150,
    height: 150,
  },
  userInfo: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  userContainer: {
    flexWrap: 'wrap',
    marginRight: '5%'
  },
  userName: {
    fontSize: 18,
    fontFamily: 'Bold'
  },
  userNo: {
    fontSize: 16,
    fontFamily: 'Regular'
  },
  button: {
    marginRight: '15%',
    marginLeft: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    shadowColor: 'rgba(0,0,0, .25)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 40
  },
  buttonTitle: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 10
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Bold'
  },
  buttonImage: {
    width: 35,
    height: 35,
    marginHorizontal: 10
  },
  buttonAdd: {
    width: '100%',
    height: '100%'
  },
  popupBack: {
    flex: 1,
    backgroundColor: "#000000aa",
    alignItems: 'center',
    justifyContent: 'center'
  },

  popup: {
    borderRadius: 40,
    height: '50%',
    width: '75%',
    padding: '5%',
    backgroundColor: 'white'
  },

  popupText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '2%'
  },

  popupInput: {
    height: 30,
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginVertical: '5%'
  },

  notify: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    marginTop: '20%'
  },

  popupButtons: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: "row"
  },


  popupAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#58ACA8',
    padding: 5,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 40
  },

  popupCancel: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AC5858',
    width: '100%',
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 40
  },

  relativeCards: {
    marginLeft: '10%',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#58ACA8',
    padding: '2%',
    marginVertical: '2%'
  },

  relative: {
    flexWrap: 'wrap',
    paddingBottom: '10%'
  },

  relativeName: {
    fontFamily: 'Medium',
    fontSize: 22,
    color: 'white'
  },

  relativeIcon: {
    width: 75,
    height: 75,
    marginRight: '5%'
  },

  relativeImage: {
    width: 75,
    height: 75
  },

  relativeHospital: {
    fontFamily: 'Regular',
    fontSize: 18,
    color: 'white',
    lineHeight: 25
  },

});
