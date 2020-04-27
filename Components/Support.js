import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

// import depression from '../assets/SupportScreenImg/depression.png';
// import healing from '../assets/SupportScreenImg/healing.png';
// import sadness from '../assets/SupportScreenImg/sadness.png';
// import talk from '../assets/SupportScreenImg/talk.png';
// import communication from '../assets/SupportScreenImg/communication.png';
// import team from '../assets/SupportScreenImg/team.png';


export default function Support() {

    let [fontsLoaded] = useFonts({
        'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        {/* <Image source={depression} style={styles.illustration}></Image> */}
                        <Text style={styles.boxText}>Depression</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        {/* <Image source={sadness} style={styles.illustration}></Image> */}
                        <Text style={styles.boxText}>Stress</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        {/* <Image source={healing} style={styles.illustration}></Image> */}
                        <Text style={styles.boxText}>Anxiety</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        {/* <Image source={team} style={styles.illustration}></Image> */}
                        <Text style={styles.boxText}>Charities</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        {/* <Image source={talk} style={styles.illustration}></Image> */}
                        <Text style={styles.boxText}>Therapy and Counselling</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        {/* <Image source={communication} style={styles.illustration}></Image> */}
                        <Text style={styles.boxText}>Support Groups</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        padding: 10,
        flexWrap: 'wrap',
        backgroundColor: '#fff',
    },

    box: {
        width: '50%',
        height: '33.33%',
        padding: 10,
    },

    inner: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: 'grey',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 50,
        shadowRadius: 4,
    },

    boxText: {
        fontFamily: 'Medium',
        fontSize: 16,
        textAlign: 'center'
    },

    illustration: {
        justifyContent: 'center',
        height: 50,
        width: 50,
    }

});