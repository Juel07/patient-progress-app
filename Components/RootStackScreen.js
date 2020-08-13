import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";

import StartScreen from "./StartScreen";
import SignInScreen from "./Sign-in";
import SignUpScreen from "./SignUp";

import OnBoarding1 from "./OnBoarding1";
import OnBoarding2 from "./OnBoarding2";
import OnBoarding3 from "./OnBoarding3";
import MainTabScreen from "./MainTabScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="StartScreen" component={StartScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="Welcome-1" component={OnBoarding1} />
    <RootStack.Screen
      options={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      name="Welcome-2"
      component={OnBoarding2}
    />
    <RootStack.Screen
      options={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      name="Welcome-3"
      component={OnBoarding3}
    />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="MainScreen" component={MainTabScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
