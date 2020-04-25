import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Settings = ({ navigation }) => {
    return (


    <View style={styles.container}>
     

      {/*Profile name and Avatar*/}

      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.profile}>Profile</Text>
          <Text style={styles.johnDoe}>John Doe</Text>
        </View>
        <Image
        source={require("../assets/JohnDoe.png")}
        resizeMode="contain"
        style={styles.profileAvatar}
        ></Image>
      </View>

      {/*Menu List*/}

      <View>
        <View style={styles.menuLine} borderBottomColor={'red'}></View>
        <View style={styles.menuItems}>
          <FontAwesomeIcon icon={faBell} style={styles.menuIcons} size= {25}/>
          <Text style={styles.menuText}>Notifications</Text>
        </View>

        <View style={styles.menuLine}></View>
        <View style={styles.menuItems}>
          <FontAwesomeIcon icon={faMobile} style={styles.menuIcons} size= {25}/>
          <Text style={styles.menuText}>Dark Mode</Text>
        </View>

        <View style={styles.menuLine}></View>
        <View style={styles.menuItems}>
          <FontAwesomeIcon icon={faQuestionCircle} style={styles.menuIcons} size= {25}/>
          <Text style={styles.menuText}>About</Text>
        </View>

        <View style={styles.menuLine}></View>
        <View style={styles.menuItems}>
          <FontAwesomeIcon icon={faExclamationTriangle} style={styles.menuIcons} size= {25}/>
          <Text style={styles.menuText}>Report</Text>
        </View>

        <View style={styles.menuLine}></View>
        <View style={styles.menuItems}>
          <FontAwesomeIcon icon={faSignOutAlt} style={styles.menuIcons} size= {25}/>
          <Text style={styles.menuText}>Sign Out</Text>
        </View>

      </View>

     
    </View>
  );
}

export default Settings;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  //Profile Avatar

  profileContainer: {
    padding: 20,
    width: '100%',
    height: 147,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  profileAvatar: {
    width: 120,
    height: 120,
    marginTop: -10,
    marginRight: 20
  },

  //Profile Details

  profile: {
    color: "#121212",
    fontSize: 18,
    //fontFamily: "montserrat-700",
    marginTop: 30,
    marginRight: 20,
    textAlign: 'right'
  },
  johnDoe: {
    color: "#121212",
    fontSize: 14,
    //fontFamily: "montserrat-600",
    marginTop: 11,
    marginRight: 20,
    textAlign: 'right'
  },

  //Settings Menu

  menuLine:{
    width: 300,
    height: 3,
    borderTopWidth: 1,
    borderTopColor: '#58ACA8',
    alignSelf: 'center',
    marginBottom: 25

  },

  menuItems:{
    flexDirection: 'row',
    marginLeft: 60
  },

  menuIcon: {
    width: 20,
    height: 20
  },

  menuText:{
    //fontFamily: "montserrat-regular",
    fontSize: 20,
    marginLeft: 30,
    marginBottom: 25
  },

  //Bottom Navigation

  bottomNavRectangle: {
    width: '100%',
    height: 70,
    backgroundColor: "rgba(255,255,255,1)",
    alignItems: 'stretch',
    elevation: 27,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowRadius: 4,
    shadowOpacity: 2,
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 5,
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    position: 'absolute',
    bottom:0
    
  },
  bottomNavButtonIcon: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 1,
    alignItems: 'center'

  }


});