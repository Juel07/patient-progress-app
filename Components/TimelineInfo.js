import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import OnLayout from 'react-native-on-layout';


const TimelineInfo = (props) => {

    return (
        <>

            {/* Parent View*/}
            <View style={styles.parent}>

                {/* Time */}
                <Text style={styles.time}>9:30</Text>

                {/* Data wrapper for Timeline & Data */}
                <View style={styles.parentWrap}>
                    {/* Timeline body */}
                    <View style={{ marginRight: 13 }}>
                        <View style={styles.circle}></View>
                        <View style={styles.rectangle}></View>
                    </View>
                    {/* API Data */}
                    <View>
                        <Text style={styles.date}>09/05/2020</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.description} numberOfLines={4} ellipsizeMode="tail">Your text here. Kate is testing multiline text. Hopefully it will work.</Text>
                        </View>


                    </View>
                </View>

            </View>

        </>
    );
};

export default TimelineInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    circle: {
        marginTop: '1.14%',
        width: 16,
        height: 16,
        borderRadius: 100 / 2,
        backgroundColor: '#58ACA8',
        zIndex: 1,
    },
    rectangle: {
        marginLeft: 7,
        width: 2,
        height: 14 * 4,
        backgroundColor: '#58ACA8',
        zIndex: 0,
        marginTop: -2,
    },
    parent: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 22,
    },
    parentWrap: {
        display: 'flex',
        flexDirection: 'row',
    },
    date: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 14,
        marginRight: 15,
    },
    description: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Regular',
        paddingTop: 6,
        width: 259,
    },
});
