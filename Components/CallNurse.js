import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from '@use-expo/font';

export default function Nurse() {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalTwoOpen, setModalTwoOpen] = useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.nurseContainer}>
                <Image
                    source={require("../assets/nurse.png")}
                    resizeMode="contain"
                    style={styles.nurseAvatar}
                ></Image>
            </View>

            <Text style={styles.nurseMaryPoppins}>Nurse Mary Poppins</Text>
            <Text style={styles.stGeorgesHospital}>St George's Hopsital</Text>
            <Text style={styles.birmingham}>Birmingham</Text>

            <View>
                <TouchableOpacity onPress={() => setModalOpen(true)}>
                    <View style={styles.rectangle}>
                        <View style={styles.textRow}>
                            <Text style={styles.bookingText}>
                                Book a time slot for{"\n"}a call with the nurse
                            </Text>
                            <FontAwesomeIcon icon={faCalendarPlus} style={styles.calendarIcon} size={80} />
                        </View>
                        <Modal
                            transparent={true}
                            visible={modalOpen}
                            animationType='fade'>
                            <View style={styles.grayOverlay}>
                                <View style={styles.bookPopUpContainer}>
                                    <Text style={styles.bookPopUpTitle}>Book Time Slot</Text>
                                    <Text style={styles.bookPopUpText}>We are currently unable to book appointments.</Text>
                                    <TouchableOpacity onPress={() => setModalOpen(false)}>
                                        <View style={styles.bookPopUpButtons}>
                                            <Text style={styles.bookPopUpButtonText}>Exit</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity onPress={() => setModalTwoOpen(true)}>
                    <View style={styles.rectangle}>
                        <View style={styles.textRow}>
                            <Text style={styles.urgentCallText}>
                                Make an urgent {"\n"}call to the nurse
              </Text>
                            <FontAwesomeIcon icon={faPhoneSquareAlt} style={styles.urgentCallIcon} size={80} />
                        </View>
                        <Modal
                            transparent={true}
                            visible={modalTwoOpen}
                            animationType='fade'>
                            <View style={styles.grayOverlay}>
                                <View style={styles.urgentPopUpContainer}>
                                    <Text style={styles.urgentPopUpTitle}>Urgent Call</Text>
                                    <Text style={styles.urgentPopUpText}>We are very busy and urge you not to call if your relative is not in a critical condition. Do you still want to call the nurse?</Text>
                                        <View style={styles.yesNoContainer}>
                                        <TouchableOpacity onPress={() => setModalTwoOpen(false)}>
                                            <View style={styles.noButton}>
                                                <Text style={styles.urgentPopUpButtonText}>No</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => setModalTwoOpen(false)}>
                                            <View style={styles.yesButton}>
                                                <Text style={styles.urgentPopUpButtonText}>Yes</Text>
                                            </View>
                                        </TouchableOpacity>
                                        </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerTwo: {
        flex: 2,
        backgroundColor: '#fff',
    },

    //Nurses Avatar

    nurseContainer: {
        padding: 10,
        width: 147,
        height: 147
    },
    nurseAvatar: {
        width: 147,
        height: 147,
        marginTop: 10,
        marginLeft: 240,
    },

    //Nurse's Details

    nurseMaryPoppins: {
        color: "#121212",
        fontSize: 18,
        //fontFamily: "montserrat-700",
        fontFamily: 'SemiBold',
        marginTop: 35,
        marginRight: 30,
        textAlign: 'right'
    },
    stGeorgesHospital: {
        color: "#121212",
        fontSize: 16,
        //fontFamily: "montserrat-600",
        fontFamily: 'Medium',
        marginTop: 11,
        marginRight: 30,
        textAlign: 'right'
    },
    birmingham: {
        color: "#121212",
        fontSize: 16,
        //fontFamily: "montserrat-regular",
        fontFamily: 'Regular',
        marginTop: 12,
        marginRight: 30,
        textAlign: 'right'
    },

    rectangle: {
        width: 400,
        height: 137,
        backgroundColor: "rgba(255,255,255,1)",
        elevation: 5,
       shadowColor: 'grey',
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowOpacity: 50,
    shadowRadius: 4,
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 60
    },
    //Booking Rectangle

    bookingText: {
        color: "#121212",
        fontSize: 16,
        fontFamily: 'Regular',
        letterSpacing: 0,
        marginTop: 4
    },
    calendarIcon: {
        color: "rgba(88,172,168,1)",
        fontSize: 40,
        height: 40,
        width: 40,
        marginLeft: 41,
        marginTop: -17
    },

    textRow: {
        height: 80,
        flexDirection: "row",
        flex: 1,
        marginRight: 40,
        marginLeft: 40,
        marginTop: 49
    },

    //Urgent Call Rectangle

    urgentCallText: {
        color: "#121212",
        fontSize: 16,
        fontFamily: 'Regular',
        letterSpacing: 0,
        marginTop: 4
    },
    urgentCallIcon: {
        color: "rgba(88,172,168,1)",
        fontSize: 40,
        height: 40,
        width: 40,
        marginLeft: 70,
        marginTop: -15
    },

    //Pop Ups

    grayOverlay: {
        flex: 1,
        backgroundColor: "#000000aa",
    },


    //Book Call Pop Up
    bookPopUpContainer: {
        width: 305,
        height: 300,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 54,
        margin: 50,
        marginTop: 200,
        marginLeft: 60,
        padding: 50

    },
    bookPopUpTitle: {
        color: "#121212",
        fontSize: 23,
        fontFamily: 'SemiBold',
        marginTop: 10,
        alignSelf: "center"
    },
    bookPopUpText: {
        color: "#121212",
        fontSize: 20,
        fontFamily: "Regular",
        textAlign: "center",
        marginTop: 30,
        alignSelf: "center"
    },
    bookPopUpButtons: {
        width: 100,
        height: 33,
        backgroundColor: "rgba(172,88,88,1)",
        borderRadius: 28,
        marginTop: 40,
        marginLeft: 50,
        alignItems: 'center'
    },
    bookPopUpButtonText: {
        fontSize: 20,
        fontFamily: "Regular",
        color: "rgba(255,255,255,1)",
        marginTop: 4
    },

    //Urgent Call Pop Up
    urgentPopUpContainer: {
        width: 305,
        height: 350,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 54,
        margin: 50,
        marginTop: 200,
        marginLeft: 60,
        padding: 50

    },
    urgentPopUpTitle: {
        color: "#121212",
        fontSize: 23,
        fontFamily: 'SemiBold',
        marginTop: -10,
        alignSelf: "center"
    },
    urgentPopUpText: {
        color: "#121212",
        fontSize: 20,
        fontFamily: "Regular",
        textAlign: "center",
        marginTop: 20,
        alignSelf: "center"
    },

    yesNoContainer: {
        flexDirection: 'row',
        marginLeft: -70,
        marginTop: -20
    },

    noButton: {
        width: 100,
        height: 33,
        backgroundColor: "rgba(172,88,88,1)",
        borderRadius: 28,
        marginTop: 40,
        marginLeft: 50,
        alignItems: 'center',
    },
    yesButton: {
        width: 100,
        height: 33,
        backgroundColor: "rgba(88,172,168,1)",
        borderRadius: 28,
        marginTop: 40,
        marginLeft: 50,
        alignItems: 'center',
    },

    urgentPopUpButtonText: {
        fontSize: 20,
        fontFamily: "Regular",
        color: "rgba(255,255,255,1)",
        marginTop: 4
    }


});
