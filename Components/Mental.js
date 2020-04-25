import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export default function Mental() {

    let [fontsLoaded] = useFonts({
        'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'semiBold': require('../assets/fonts/Montserrat-SemiBold.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.rect}>
                        <Text style={styles.anxiety}>STRESS</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.rect2}>
                        <Text style={styles.stress}>ANXIETY</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.rect3}>
                        <Text style={styles.depression}>DEPRESSION</Text>
                    </View>
                </View>

            </View>
        );
    }
}

const { height } = Dimensions.get("screen");
const height_row = height * 0.33;
const height_container = height * 0.80

const styles = StyleSheet.create({

    container: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        height: height_container
    },

    row: {
        height: height_row,
        flex: 1,
    },

    //Stress
    rect: {
        width: Dimensions.get('window').width,
        backgroundColor: "rgba(231,240,195,1)",
        flex: 1,
        justifyContent: "center",
    },
    stress: {
        color: "rgba(0,0,0,1)",
        fontSize: 16,
        fontFamily: 'Bold',
        textAlign: 'center',
    },
    //Anxiety
    rect2: {
        width: Dimensions.get('window').width,
        backgroundColor: "rgba(243,234,192,1)",
        justifyContent: "center",
        flex: 1
    },
    anxiety: {
        color: "rgba(0,0,0,1)",
        fontSize: 16,
        fontFamily: 'Bold',
        textAlign: 'center',

    },

    //Depression
    rect3: {
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: "rgba(164,212,174,1)",
        justifyContent: "center",

    },
    depression: {
        color: "rgba(0,0,0,1)",
        fontSize: 16,
        fontFamily: 'Bold',
        textAlign: 'center'
    },

});