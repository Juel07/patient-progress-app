import React from 'react';
import {
    View,
    Image
} from 'react-native';

//Trying to import button
import CustomButton from './CustomButton';

//Import logo
import bigger from '../assets/bigger-logo.png';

const StartScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF'
        }}>
            <Image source={bigger} style={{ width: 350, marginBottom: 70, height: 160, }} />
            <CustomButton text="   Sign in   " onPress={() => navigation.navigate('SignInScreen')}></CustomButton>
            <CustomButton text="Get Started" onPress={() => navigation.navigate('Welcome-1')}></CustomButton>
        </View>
    );
};

export default StartScreen;

