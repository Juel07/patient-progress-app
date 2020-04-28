/*React Native TimeLine ListView / Flatlist*/
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, Image, Modal} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import add from '../assets/add.png';
import Jane from '../assets/Jane.png';
import green from '../assets/green_circle.jpeg';

export default class BasicTimeLine extends Component {

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

    //const [modalOpen, setModalOpen] = useState(false);
    //const [modalTwoOpen, setModalTwoOpen] = useState(false);

    return (
        <ScrollView style = {{width:'100%'}}>
        <View style={styles.container}>
            <Timeline style={{ flex: 1 }} data={this.data} descriptionStyle={{ color: 'black', fontSize:18}}/>
        </View>
        <View style={styles.add}>
        <TouchableOpacity onPress={()=> alert('test')}>
            <Image source={add}/>
        </TouchableOpacity>
        </View>
        <View style={styles.Button}>
            <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={()=> alert('test')}>
            <Text style={{fontSize:16, fontFamily: 'Bold', color: '#000000'}}>Request an update</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.Jane}>
            <Image source={Jane}/>
        </View>
        <View style={styles.infoBox}><Text style = {{fontSize: 15, fontFamily: 'Bold', color: '#000000', textAlign: 'center'}}>Jane Doe{"\n"}{"\n"}NHS NUMBER: 000 000 0000{"\n"}{"\n"}PROGRES:         stable</Text>
        </View>
        <View style={styles.green}>
            <Image source={green}/>
        </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 160,
    marginTop: 75,
    paddingBottom: 190,
    paddingTop: 55,
    paddingHorizontal: 20,
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
	  height: 5,},
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
    paddingTop:33,
    marginTop: -716,
    marginBottom: 700,
    alignSelf: 'flex-end',
    //marginRight:40,
  },
  infoBox: {
    paddingTop: 20,
    marginTop: -830,
    marginLeft: 2,
    width: 296,
    height: 120,
    marginBottom: 700,
    backgroundColor: '#FFFFFF'  
  },
  green: {
    paddingTop: 20,
    marginTop: -740,
    marginLeft: 160,
    paddingBottom: 650
    //marginBottom: -20,
  },
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
}
});