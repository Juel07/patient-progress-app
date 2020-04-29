/*React Native TimeLine ListView / Flatlist*/
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image, Modal, StatusBar } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import add from '../assets/add.png';
import Jane from '../assets/Jane.png';
import green from '../assets/green_circle.jpeg';

export default class BasicTimeLine extends Component {
  //pop-up
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  constructor() {
    super();
    this.data = [
      {
        time: '12:45',
        title: '08/07/2020',
        description:
          'Temperature of 38C.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8',
        fontSize: 5,
      },
      {
        time: '17:50',
        title: '10/07/2020',
        description:
          'Oxygen therapy administered.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '03:00',
        title: '14/07/2020',
        description:
          'Normal blood pressure.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '09:00',
        title: '18/07/2020',
        description:
          'Weight: 75 kg - no change.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '14:00',
        title: '23/07/2020',
        description:
          'Normal glucose levels.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '13:00',
        title: '26/07/2020',
        description:
          'Heart rate: 80 bpm - Normal heart rate.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8',
      },
    ];
  }

  render() {
    const { modalVisible } = this.state;
    //const [modalOpen, setModalOpen] = useState(false);
    //const [modalTwoOpen, setModalTwoOpen] = useState(false);

    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.joint}>
        <View style={styles.userInfo}>
              <View style={styles.userContainer}>
                <Text style={styles.userName}>Jane Doe</Text>
              </View>

              <View style={styles.userContainer}>
                <Text style={styles.userNo}>NHS NUMBER: 000 000 0000</Text>
              </View>
              
              <View style={styles.userContainer}>
                <Text style={styles.userNo}>PROGRESS: stable</Text>
              </View>

            </View>
          <View style={styles.Jane}>
            <Image source={Jane} />
          </View>
          <View style={styles.green}>
          <Image source={green} />
        </View>
        </View>
        <View style={styles.container}>
          <StatusBar backgroundColor='#32afa9' barStyle="light-content" />
          <Timeline style={{ flex: 1 }} data={this.data} descriptionStyle={{ color: 'black', fontSize: 18 }} />
        </View>
        <View style={styles.add}>
          {/*THIS IS THE BLUE PLUS SIGN ON BUTTON*/}
          <TouchableOpacity onPress={() => alert('test')}>
            <Image source={add} />
          </TouchableOpacity>
        </View>
        {/* THIS IS THE POPUP CODE */}
        <View style={styles.Button}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => { this.setModalVisible(!modalVisible); }}>
            <Text style={{ fontSize: 16, fontFamily: 'Bold', color: '#000000' }}>Request an update</Text>

            <Modal transparent={true} visible={modalVisible} animationType='fade'>
              <View style={styles.popupBack}>
                <View style={styles.popup}>

                  <View style={styles.popupText}>
                    <Text style={{ fontFamily: 'Bold', fontSize: 23 }}>Request an Update</Text>
                  </View>

                  <View style={styles.popupText}>
                    <Text style={{ fontFamily: 'Regular', fontSize: 18 }}>Additional notes (optional):</Text>
                    <TextInput style={styles.popupInput} maxLength={250}></TextInput>
                  </View>

                  <View style={styles.popupButtons}>
                    <TouchableOpacity onPress={() => { this.setModalVisible(false); }}>
                      <View style={styles.popupRequest}>
                        <Text style={{ fontFamily: 'Medium', fontSize: 16, color: 'white' }}>Request</Text>
                      </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => { this.setModalVisible(false); }}>
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
        {/* THIS IS THE POPUP CODE*/}

        {/*THIS IS THE GREEN BUTTON ICON*/}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 160,
    //marginTop: 75,
    paddingBottom: 190,
    //paddingTop: 55,
    //paddingHorizontal: 20,
    //width: '100%',
    //height: '100%'
  
  },
  wrapper: {
    flex: 1,
    //padding: 30,
    flexDirection: 'column',
    //  justifyContent: 'flex-start',
    backgroundColor: '#fff',
    width: '100%'
  },

  Button: {
    marginTop: -35,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 70,
    marginLeft: 70,
    marginRight: 40,
    //borderColor: 'black',
    borderWidth: 0.3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 0,

  },
  add: {
    marginTop: -320,
    marginLeft: 320,
    flex: 1,
    //position: 'absolute',
    zIndex: 1
    //zIndex: 999
    //marginBottom: 5,
    //marginLeft: 70,
  },
  Jane: {
    //paddingTop:30,
    //marginTop: -750,
    //marginBottom: 700,
    //alignSelf: 'flex-end',
    //marginRight:40,
  },
  infoBox: {
    //paddingTop: -20,
    //marginTop: -870,
    //marginLeft: -15,
    //width: 296,
    //height: 120,
    //marginBottom: 700,
    //backgroundColor: '#FFFFFF'  
  },
  green: {
    //paddingTop: 20,
    //marginTop: -760,
    //marginLeft: 145,
    //paddingBottom: 650
    //marginBottom: -20,
  },
  grayOverlay: {
    flex: 1,
    backgroundColor: "#000000aa",
  },
  popupBack: {
    flex: 1,
    backgroundColor: "#000000aa",
    alignItems: 'center',
    justifyContent: 'center'
  },
  bookPopUpButtonText: {
    fontSize: 20,
    fontFamily: "Regular",
    color: "rgba(255,255,255,1)",
    marginTop: 4
  },
  //Pop-up styling
  popupBack: {
    flex: 1,
    backgroundColor: "#000000aa",
    alignItems: 'center',
    justifyContent: 'center'
  },

  popup: {
    borderRadius: 40,
    height: '30%',
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
    marginTop: '20%',
  },

  popupButtons: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: "row",
    marginTop: '4%'
  },


  popupRequest: {
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
  joint: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    //marginBottom: -70
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
    fontFamily: 'SemiBold',
    lineHeight: 25
  },
  userNo: {
    fontSize: 14,
    fontFamily: 'Regular'
  },
});