import React, { Component, useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Alert,
  Modal,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-paper";
import { TouchableRipple, Switch } from "react-native-paper";

//import 'react-responsive-modal/styles.css';
//import { Modal } from 'react-responsive-modal';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

const Contacts = ({ navigation }) => {
  //toggle switch
  const [isRest, setIsRest] = useState(false);
  const toggleRest = () => setIsRest((previousState) => !previousState);

  //Pop-up
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTwoOpen, setModalTwoOpen] = useState(false);
  const [modalThreeOpen, setModalThreeOpen] = useState(false);

  // fonts load
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
        <StatusBar backgroundColor='#32afa9' barStyle='light-content' />
        <View style={styles.topContainer}>
          {/* THIS IS THE USER INFO */}
          <View style={styles.user}>
            <View
              style={{
                alignItems: "flex-end",
                justifyContent: "flex-end",
                padding: "1.5%",
              }}
            >
              <Image
                style={styles.userImage}
                resizeMode='contain'
                source={require("../assets/JohnDoe.png")}
              />
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
          <View style={{ padding: "2%", marginTop: "2%" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalOpen(true)}
            >
              <View style={styles.buttonTitle}>
                <Text style={styles.buttonText}>My relatives/friends</Text>
              </View>

              <View style={styles.buttonImage}>
                <Image
                  style={styles.buttonAdd}
                  resizeMode='contain'
                  source={require("../assets/Vector.png")}
                />
              </View>

              {/* MODAL 1... */}
              <Modal
                transparent={true}
                visible={modalOpen}
                animationType='fade'
              >
                <View style={styles.popupBack}>
                  <View style={styles.popup}>
                    <View style={styles.popupText}>
                      <Text style={{ fontFamily: "SemiBold", fontSize: 18 }}>
                        New Patient
                      </Text>
                    </View>

                    <View style={styles.popupText}>
                      <Text style={{ fontFamily: "Regular", fontSize: 15 }}>
                        Relative's Full Name:
                      </Text>
                      <TextInput
                        style={styles.popupInput}
                        minLength={2}
                      ></TextInput>
                    </View>

                    <View style={styles.popupText}>
                      <Text style={{ fontFamily: "Regular", fontSize: 15 }}>
                        Relative's D.O.B (dd/mm/yyyy):
                      </Text>

                      <View style={{ flexDirection: "row" }}>
                        <TextInput
                          style={styles.popupDOB}
                          maxLength={1}
                          keyboardType='numeric'
                          textAlign='center'
                        ></TextInput>
                        <TextInput
                          style={styles.popupDOB}
                          maxLength={1}
                          keyboardType='numeric'
                          textAlign='center'
                        ></TextInput>

                        <TextInput
                          style={styles.popupDOB}
                          maxLength={1}
                          keyboardType='numeric'
                          textAlign='center'
                        ></TextInput>
                        <TextInput
                          style={styles.popupDOB}
                          maxLength={1}
                          keyboardType='numeric'
                          textAlign='center'
                        ></TextInput>

                        <TextInput
                          style={styles.popupDOB}
                          maxLength={1}
                          keyboardType='numeric'
                          textAlign='center'
                        ></TextInput>
                        <TextInput
                          style={styles.popupDOB}
                          maxLength={1}
                          keyboardType='numeric'
                          textAlign='center'
                        ></TextInput>
                        <TextInput
                          style={styles.popupDOB}
                          maxLength={1}
                          keyboardType='numeric'
                          textAlign='center'
                        ></TextInput>
                        <TextInput
                          style={styles.popupDOB}
                          maxLength={1}
                          keyboardType='numeric'
                          textAlign='center'
                        ></TextInput>
                      </View>
                    </View>

                    <View style={styles.popupButtons}>
                      <TouchableOpacity onPress={() => setModalOpen(false)}>
                        <View style={styles.popupCancel}>
                          <Text
                            style={{
                              fontFamily: "Medium",
                              fontSize: 16,
                              color: "white",
                            }}
                          >
                            Back
                          </Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => {
                          setModalOpen(false);
                          setModalTwoOpen(true);
                        }}
                      >
                        <View style={styles.popupAdd}>
                          <Text
                            style={{
                              fontFamily: "Medium",
                              fontSize: 16,
                              color: "white",
                            }}
                          >
                            Next
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              {/* MODAL 1... */}

              {/* MODAL 2... */}
              <Modal
                transparent={true}
                visible={modalTwoOpen}
                animationType='fade'
              >
                <View style={styles.popupBack}>
                  <View style={styles.popup2}>
                    <View style={styles.popupText2}>
                      <Text style={{ fontFamily: "SemiBold", fontSize: 18 }}>
                        New Patient
                      </Text>
                    </View>

                    <View style={styles.popupText2}>
                      <Text style={{ fontFamily: "Regular", fontSize: 16 }}>
                        Relative's Full Address:
                      </Text>
                      <TextInput
                        style={styles.popupInput2}
                        dataDetectorTypes='address'
                        scrollEnabled
                        multiline
                        numberOfLines={6}
                      ></TextInput>
                    </View>

                    <View style={styles.popupText2}>
                      <Text style={{ fontFamily: "Regular", fontSize: 16 }}>
                        Relative's NHS Number:
                      </Text>
                      <TextInput
                        style={styles.popupInput}
                        minLength={10}
                        maxLength={10}
                        keyboardType='numeric'
                      ></TextInput>
                    </View>

                    <View style={styles.notify}>
                      <View>
                        <Text
                          style={{ fontFamily: "Regular", fontSize: 14 }}
                          textAlign='center'
                        >
                          Notify me if my relative
                        </Text>
                        <Text style={{ fontFamily: "Regular", fontSize: 14 }}>
                          {" "}
                          passes away
                        </Text>
                      </View>

                      <TouchableRipple
                        onPress={() => {
                          toggleRest();
                        }}
                      >
                        <View pointerEvents='none' style={{ marginLeft: "1%" }}>
                          <Switch
                            style={styles.switch}
                            value={isRest}
                            trackColor={{ false: "#767577", true: "#58ACA8" }}
                            thumbColor={isRest ? "#32afa9" : "#393b3a"}
                          />
                        </View>
                      </TouchableRipple>
                    </View>

                    <View style={styles.popupButtons}>
                      <TouchableOpacity
                        onPress={() => {
                          setModalTwoOpen(false);
                          setModalOpen(true);
                        }}
                      >
                        <View style={styles.popupCancel}>
                          <Text
                            style={{
                              fontFamily: "Medium",
                              fontSize: 16,
                              color: "white",
                            }}
                          >
                            Back
                          </Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => {
                          setModalTwoOpen(false);
                          setModalThreeOpen(true);
                        }}
                      >
                        <View style={styles.popupAdd}>
                          <Text
                            style={{
                              fontFamily: "Medium",
                              fontSize: 16,
                              color: "white",
                            }}
                          >
                            Add
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              {/* MODAL 2... */}

              {/* MODAL 3... */}
              <Modal
                transparent={true}
                visible={modalThreeOpen}
                animationType='fade'
              >
                <View style={styles.popupBack}>
                  <View style={styles.popup3}>
                    <View style={styles.popupText}>
                      <Text style={{ fontFamily: "SemiBold", fontSize: 18 }}>
                        Request Sent
                      </Text>
                    </View>

                    <View style={styles.popupText}>
                      <Text
                        style={{ fontFamily: "Regular", fontSize: 16 }}
                        textAlign='center'
                      >
                        Your request has been sent for
                      </Text>
                      <Text
                        style={{ fontFamily: "Regular", fontSize: 16 }}
                        textAlign='center'
                      >
                        authorisation
                      </Text>
                    </View>

                    <View style={styles.popupButtons}>
                      <TouchableOpacity
                        onPress={() => {
                          setModalThreeOpen(false);
                        }}
                      >
                        <View style={styles.popupAdd}>
                          <Text
                            style={{
                              fontFamily: "Medium",
                              fontSize: 16,
                              color: "white",
                            }}
                          >
                            OK
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              {/* MODAL 3... */}
            </TouchableOpacity>
          </View>
        </View>
        {/* THIS IS THE USER BUTTON */}

        {/* THIS IS THE USER RELATIVE CODE */}
        <View style={styles.bottomContainer}>
          <View style={styles.rect1}>
            <TouchableOpacity
              style={styles.relativeCard}
              onPress={() => navigation.navigate("Feed")}
            >
              <View style={styles.relative}>
                <Avatar.Image
                  size={70}
                  source={require("../assets/Jane.png")}
                />
              </View>
              <View style={styles.relativeInfo}>
                <View>
                  <Text style={styles.relativeFullName}>Ellen Wright</Text>
                  <Text style={styles.relativeHosp}>
                    St.George&#39;s Hospital
                  </Text>
                </View>
                <View style={styles.update}>
                  <Text style={styles.relativeUpdate}>Updated:</Text>
                  <Text style={styles.date_time}> 13th August</Text>
                  <Text style={styles.relativeUpdate}> at</Text>
                  <Text style={styles.date_time}> 20:09</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rect1}>
            <TouchableOpacity
              style={styles.relativeCard}
              onPress={() => navigation.navigate("SecondFeed")}
            >
              <View style={styles.relative}>
                <Avatar.Image
                  size={70}
                  source={require("../assets/Jane.png")}
                />
              </View>
              <View style={styles.relativeInfo}>
                <View>
                  <Text style={styles.relativeFullName}>Jill Johnson</Text>
                  <Text style={styles.relativeHosp}>
                    St.George&#39;s Hospital
                  </Text>
                </View>
                <View style={styles.update}>
                  <Text style={styles.relativeUpdate}>Updated:</Text>
                  <Text style={styles.date_time}> 17th July</Text>
                  <Text style={styles.relativeUpdate}> at</Text>
                  <Text style={styles.date_time}> 11:39</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* THIS IS THE USER RELATIVE CODE */}
      </View>
    );
  }
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },

  topContainer: {
    flex: 1,
    paddingBottom: hp("15%"),
  },

  bottomContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },

  rect1: {
    width: "93%",
    height: "45%",
    marginLeft: "7%",
    paddingBottom: 10,
  },

  relativeCard: {
    flex: 1,
    flexDirection: "row",
    elevation: 5,
    shadowColor: "grey",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 50,
    shadowRadius: 4,
    backgroundColor: "#32afa9",
    borderBottomLeftRadius: 50,
    justifyContent: "space-evenly",
  },

  relative: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  relativeInfo: {
    flex: 3,
    color: "#fff",
    justifyContent: "space-around",
  },

  relativeHosp: {
    fontFamily: "Regular",
    color: "#fff",
    fontSize: 16,
  },

  relativeUpdate: {
    fontFamily: "Regular",
    color: "#fff",
    fontSize: 16,
    lineHeight: 18,
  },

  update: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  date_time: {
    color: "#fff",
    fontFamily: "SemiBold",
    fontSize: 16,
    lineHeight: 18,
  },

  relativeFullName: {
    color: "#fff",
    fontFamily: "SemiBold",
    fontSize: 18,
  },

  user: {
    flexDirection: "column",
    padding: 20,
    justifyContent: "flex-end",
    // paddingBottom: '1%'
  },
  userImage: {
    width: 150,
    height: 150,
  },
  userInfo: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginRight: "5%",
  },
  userContainer: {
    flexWrap: "wrap",
  },
  userName: {
    fontSize: 18,
    fontFamily: "SemiBold",
    lineHeight: 25,
  },
  userNo: {
    fontSize: 16,
    fontFamily: "Regular",
  },
  button: {
    marginRight: "5%",
    marginLeft: "25%",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    shadowColor: "rgba(0,0,0, .25)",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 40,
  },
  buttonTitle: {
    flexWrap: "wrap",
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "SemiBold",
    textAlign: "justify",
  },
  buttonImage: {
    width: 35,
    height: 35,
    marginHorizontal: 10,
  },
  buttonAdd: {
    width: "100%",
    height: "100%",
  },
  popupBack: {
    flex: 1,
    backgroundColor: "#000000aa",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "10%",
  },

  popup: {
    borderRadius: 40,
    //height: '60%',
    width: "70%",
    padding: "1%",
    backgroundColor: "white",
    flex: 0.45,
  },

  popup2: {
    borderRadius: 40,
    //height: '80%',
    width: "75%",
    padding: "2%",
    backgroundColor: "white",
    flex: 0.6,
    //paddingRight:'10%',
    //paddingLeft:'10%'
  },

  popup3: {
    borderRadius: 40,
    //height: '80%',
    //width: '95%',
    //padding: '2%',
    backgroundColor: "white",
    flex: 0.3,
    paddingRight: "5%",
    paddingLeft: "5%",
  },

  popupText: {
    justifyContent: "center",
    alignItems: "center",
    //marginVertical: '5%',
    flex: 1,
  },
  popupText2: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "5%",
    flex: 0.8,
  },
  popupInput: {
    height: 30,
    width: "90%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginVertical: "5%",
  },

  popupInput2: {
    height: "100%",
    width: "90%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginVertical: "5%",
  },

  popupDOB: {
    height: "10%",
    width: "10%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginVertical: "5%",
  },

  notify: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },

  popupButtons: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    flex: 1,
  },

  popupAdd: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#58ACA8",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 40,
  },

  popupCancel: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AC5858",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 40,
  },
});
