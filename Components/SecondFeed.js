/*React Native TimeLine ListView / Flatlist*/
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Jane from "../assets/Jane.png";
import green from "../assets/green.jpg";
import orange from "../assets/orange.jpg";
import red from "../assets/red.jpg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { YellowBox } from "react-native";

import TimelineInfo from "./TimelineInfo";
import TimelineEnd from "./TimelineEnd";

YellowBox.ignoreWarnings([
  "VirtualizedLists should never be nested", // TODO: Remove when fixed
]);

export default class SecondFeed extends Component {
  state = {
    userData: null,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  constructor() {
    super();
  }

  componentDidMount() {
    fetch("https://nhs-services.herokuapp.com/api/patients/1149486687")
      .then((response) => response.json())
      .then((userData) => this.setState({ userData }));
  }

  render() {
    if (this.state.userData === null) {
      return (
        <View style={styles.dataLoading}>
          <Text style={styles.userName}>Loading patient data...</Text>
        </View>
      );
    }

    const { modalVisible } = this.state;

    // Conditional rendering of the patient's condition
    const patientCondition = this.state.userData.health_recordings[0].condition;
    let icon;
    let description;
    if (patientCondition == "Stable") {
      icon = <Image source={green} />;
      description = <Text style={styles.userNo}> stable</Text>;
    } else if (patientCondition == "Unstable") {
      icon = <Image source={orange} />;
      description = <Text style={styles.userNo}> unstable</Text>;
    } else if (patientCondition == "Critical") {
      icon = <Image source={red} />;
      description = <Text style={styles.userNo}> critical</Text>;
    }

    // Get data description
    const dataDescription = {
      temperature: {
        message: "Temperature of ",
      },
      ward: {
        message: "Patient was admitted to ",
      },
      nurse: {
        message: "Nurse assigned: ",
      },
      heartRate: {
        message: "Heart rate of ",
      },
      treatment: {
        message: "Currently taking ",
      },
      covid: {
        message: "COVID-19 severity: ",
      },
      other: {
        message: "Mild symptomps of ",
      },
    };

    return (
      <ScrollView style={styles.wrapper}>
        <StatusBar backgroundColor="#32afa9" barStyle="light-content" />
        <View style={styles.userInfo}>
          {/*CODE FOR JANE DOE TEXT STARTS*/}
          <View style={styles.userContainer}>
            <Text style={styles.userName}>{this.state.userData.full_name}</Text>
            <Text style={styles.userNo}>
              NHS NUMBER: {this.state.userData.nhs_number}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.userNo}>PROGRESS: </Text>
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
        <TimelineInfo
          rawData={this.state.userData.health_recordings[0]}
          data={this.state.userData.health_recordings[0].temperature}
          description={dataDescription.temperature.message}
          extras={"°C"}
        />

        <TimelineInfo
          rawData={this.state.userData.health_recordings[0]}
          data={this.state.userData.health_recordings[0].heart_rate}
          description={dataDescription.heartRate.message}
          extras={" bpm"}
        />

        <TimelineInfo
          rawData={this.state.userData.health_recordings[0]}
          data={this.state.userData.ward.nurses[2].full_name}
          description={dataDescription.nurse.message}
          extras={""}
        />

        <TimelineInfo
          rawData={this.state.userData.health_recordings[1]}
          data={this.state.userData.health_recordings[1].heart_rate}
          description={dataDescription.heartRate.message}
          extras={" bpm"}
        />

        <TimelineInfo
          rawData={this.state.userData.health_recordings[1]}
          data={this.state.userData.diagnoses[1].treatment}
          description={dataDescription.treatment.message}
          extras={""}
        />

        <TimelineInfo
          rawData={this.state.userData.health_recordings[1]}
          data={this.state.userData.diagnoses[0].severity}
          description={dataDescription.covid.message}
          extras={""}
        />

        <TimelineInfo
          rawData={this.state.userData.health_recordings[1]}
          data={this.state.userData.health_recordings[1].temperature}
          description={dataDescription.temperature.message}
          extras={"°C"}
        />

        <TimelineEnd
          rawData={this.state.userData.health_recordings[1]}
          data={this.state.userData.ward.ward_name}
          description={dataDescription.ward.message}
          extras={""}
        />
        {/*CODE FOR FEED ENDS*/}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  wrapper: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    width: "100%",
  },
  dataLoading: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  userInfo: {
    alignItems: "center",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  userContainer: {
    flexWrap: "wrap",
    marginLeft: "5%",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  userName: {
    fontSize: 18,
    fontFamily: "SemiBold",
    lineHeight: 25,
  },
  userNo: {
    fontSize: 14,
    fontFamily: "Regular",
  },
  button: {
    alignItems: "center",
    padding: 10,
  },
  innerButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    height: hp("10%"),
    //padding: 10,
    paddingRight: 10,
    paddingLeft: 30,
    alignItems: "center",
    width: wp("75%"),
    shadowColor: "rgba(0,0,0, .25)",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 40,
  },
  //Pop-up styling
  popupBack: {
    flex: 1,
    backgroundColor: "#000000aa",
    alignItems: "center",
    justifyContent: "center",
  },

  popup: {
    borderRadius: 40,
    height: "40%",
    width: "75%",
    padding: "5%",
    backgroundColor: "white",
  },

  popupText: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "2%",
  },

  popupInput: {
    height: 30,
    width: "90%",
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
    marginTop: "20%",
  },

  popupButtons: {
    height: "20%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: "4%",
  },

  popupRequest: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#58ACA8",
    padding: 5,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 40,
  },

  popupCancel: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AC5858",
    width: "100%",
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 40,
  },
  buttonAdd: {
    width: 37,
    height: 37,
  },
});
