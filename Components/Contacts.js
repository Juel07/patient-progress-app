// import React from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';


// const Contacts  = ({ navigation }) => {
//     return (
//       <View style={styles.container}><Text>Contacts</Text>
//       <Button
//         title="Go to Feed"
//         onPress={() => navigation.navigate('Feed')}
//       />
//       </View>
//     );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center',
//     backgroundColor: '#FFFFFF',
//   },
// });

import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, CheckBox } from "react-native";
import Dialog from "react-native-dialog";

import Feed from './Feed';

const Contacts = (props) => {
  return (
    <View style={styles.container}>

      {/* THIS IS THE USER INFO */}
      <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'flex-end', paddingBottom: '0.5%' }}>
        <View style={{ width: 150, height: 150 }}>
          <Image style={{ width: '100%', height: '100%' }} source={require('../assets/JohnDoe.png')} />
        </View>
      </View>

      <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', padding: 10, paddingTop: '0.5%' }}>
        <View style={{ flexWrap: 'wrap', marginRight: '5%' }}>
          <Text style={{ fontSize: 22 }}>John Doe</Text>
        </View>

        <View style={{ flexWrap: 'wrap', marginRight: '5%' }}>
          <Text style={{ fontSize: 14 }}>NHS NUMBER: 000 000 0000</Text>
        </View>

      </View>
      {/* THIS IS THE USER INFO */}

      {/* THIS IS THE BUTTON */}
      <View style={{ padding: '2%' }}>

        <TouchableOpacity style={{
          marginRight: '15%', marginLeft: '15%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'white', padding: 10, shadowColor: 'rgba(0,0,0, .25)',
          shadowOffset: { height: 0, width: 0 }, shadowOpacity: 2, shadowRadius: 4, elevation: 5, borderRadius: 40,
        }} 
        // onPress={this.showDialog}
        onPress={() => { props.navigation.navigate('Feed') }}
        >
          <View style={{ justifyContent: 'center', flexWrap: 'wrap', marginHorizontal: 10 }}>
            <Text style={{ fontSize: 22 }}>My relatives/friends</Text>
          </View>

          <View style={{ width: 35, height: 35, marginHorizontal: 10 }}>
            <Image style={{ width: '100%', height: '100%' }} source={require('../assets/Vector.png')} />
          </View>
        </TouchableOpacity>

      </View>
      {/* THIS IS THE USER BUTTON */}


      {/* THIS IS THE USER RELATIVE CODE */}
      <TouchableOpacity style={{ marginLeft: '10%', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'flex-end', flexDirection: 'row', backgroundColor: '#58ACA8', padding: '2%', marginVertical: '2%' }}>

        <View style={{ flexWrap: 'wrap', height: 100 }}>
          <Text style={{ fontSize: 25, color: 'white', paddingBottom: '3%' }}>Jane Doe</Text>
          <Text style={{ fontSize: 18, color: 'white', lineHeight: 25 }}>St.George&#39;s Hospital{"\n"}Last updated: 14th June 10:20</Text>
        </View>

        <View style={{ width: 75, height: 75, marginBottom: '7%', marginRight: '1%' }}>
          <Image style={{ width: 60, height: 60 }} source={require('../assets/Vectorperson.png')} />
        </View>
      </TouchableOpacity>

      <View style={{ marginLeft: '10%', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'flex-end', flexDirection: 'row', backgroundColor: '#58ACA8', padding: '2%', marginVertical: '2%' }}>

        <View style={{ flexWrap: 'wrap', height: 100 }}>
          <Text style={{ fontSize: 25, color: 'white', paddingBottom: '3%' }}>Jill Doe</Text>
          <Text style={{ fontSize: 18, color: 'white', lineHeight: 25 }}>St.George&#39;s Hospital{"\n"}Last updated: 18th June 20:00</Text>
        </View>

        <View style={{ width: 75, height: 75, marginBottom: '7%', marginRight: '1%' }}>
          <Image style={{ width: 60, height: 60 }} source={require('../assets/Vectorperson.png')} />
        </View>
      </View>
      {/* THIS IS THE USER RELATIVE CODE */}

    </View>
  );
}
export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});  
