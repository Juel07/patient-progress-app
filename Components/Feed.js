/*React Native TimeLine ListView / Flatlist*/
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image, Modal, StatusBar, FlatList, SafeAreaView } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import Jane from '../assets/Jane.png';
import green from '../assets/green.jpg';
import orange from '../assets/orange.jpg';
import red from '../assets/red.jpg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

export default class BasicTimeLine extends Component {
  //pop-up
  state = {
    modalVisible: false,
    userData: null
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  constructor() {
    super();
    this.data = [
      {
        time: '09:30',
        title: '08/07/2020',
        description:
          'Temperature of 37C.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8',
        fontSize: 5,
      },
      {
        time: '12:30',
        title: '08/07/2020',
        description:
          'Oxygen therapy administered.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '17:30',
        title: '08/07/2020',
        description:
          'Breathing returned to normal.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '09:30',
        title: '09/07/2020',
        description:
          'Weight: 75 kg - no change from previously recorded weight.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '12:30',
        title: '09/07/2020',
        description:
          'Normal glucose levels and normal blood pressure.',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8'
      },
      {
        time: '15:30',
        title: '09/07/2020',
        description: 'Hey',
        circleColor: '#58ACA8',
        lineColor: '#58ACA8',
      },
    ];
  }

  componentDidMount() {
    fetch("https://nhs-services.herokuapp.com/api/patients/2147483647")
      .then(response => response.json())
      .then(userData => this.setState({ userData }));
  }



  render() {
    if (this.state.userData === null) {
      return <Text>Loading patient data...</Text>;
    }

    const { modalVisible } = this.state;

    // Conditional rendering of the patient's condition
    const patientCondition = this.state.userData.health_recordings[0].condition;
    let icon;
    let description;
    if (patientCondition == "Stable") {
      icon = <Image source={green} />;
      description = <Text style={styles.userNo}>  stable</Text>;
    } else if (patientCondition == "Unstable") {
      icon = <Image source={orange} />;
      description = <Text style={styles.userNo}>  unstable</Text>;
    } else if (patientCondition == "Critical") {
      icon = <Image source={red} />;
      description = <Text style={styles.userNo}>  critical</Text>;
    }

    return (
      <ScrollView style={styles.wrapper}>
        <StatusBar backgroundColor='#32afa9' barStyle="light-content" />
        <View style={styles.userInfo}>
          {/*CODE FOR JANE DOE TEXT STARTS*/}
          <View style={styles.userContainer}>
            <Text style={styles.userName}>{this.state.userData.full_name}</Text>
            <Text style={styles.userNo}>NHS NUMBER: {this.state.userData.nhs_number}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.userNo}>PROGRESS:  </Text>
              {icon}
              {description}
            </View>
          </View>

          <View style={styles.Jane}>
            <Image source={Jane} />
          </View>

        </View>
        {/*CODE FOR JANE ENDS*/}

        {/*CODE FOR FEED STARTS */}
        <View style={styles.container} >
          <Timeline style={{ flex: 1 }} data={this.data} descriptionStyle={{ color: 'black', fontSize: 16, fontFamily: 'Regular' }} />
        </View>
        {/*CODE FOR FEED ENDS*/}

        {/*CODE FOR BUTTON STARTS*/}
        <View style={styles.button}>
          <TouchableOpacity style={styles.innerButton} onPress={() => { this.setModalVisible(!modalVisible); }}>
            <Text style={{ fontFamily: 'Bold', fontSize: 16 }}>Request an Update</Text>
            <Image style={styles.buttonAdd} resizeMode='contain' source={require('../assets/Vector.png')} />
          </TouchableOpacity>
        </View>
        {/*CODE FOR BUTTON ENDS*/}

        {/*CODE FOR POP UP STARTS*/}
        <Modal transparent={true} visible={modalVisible} animationType='fade'>
          <View style={styles.popupBack}>
            <View style={styles.popup}>

              <View style={styles.popupText}>
                <Text style={{ fontFamily: 'Bold', fontSize: 18, textAlign: 'justify' }}>Request an Update</Text>
              </View>

              <View style={styles.popupText}>
                <Text style={{ fontFamily: 'Regular', fontSize: 16 }}>Additional notes (optional):</Text>
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
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '100%'
  },
  userInfo: {
    alignItems: 'center',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  userContainer: {
    flexWrap: 'wrap',
    marginLeft: '5%',
    flexDirection: 'column',
    alignItems: 'flex-end'
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
  button: {
    alignItems: 'center',
    padding: 10
  },
  innerButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: hp('10%'),
    //padding: 10,
    paddingRight: 10,
    paddingLeft: 30,
    alignItems: 'center',
    width: wp('75%'),
    shadowColor: 'rgba(0,0,0, .25)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 40
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
    height: '40%',
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
  buttonAdd: {
    width: 37,
    height: 37,
  }
})