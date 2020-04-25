// import React from 'react';
// import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { TextInput } from 'react-native-gesture-handler';

// import OnBoarding1 from './PP/Components/Pages/OnBoarding1';
// import OnBoarding2 from './PP/Components/Pages/OnBoarding2';
// import OnBoarding3 from './PP/Components/Pages/OnBoarding3';
// import Mental from './PP/Components/Pages/Mental';

// import CustomButton from './PP/Components/Pages/CustomButton';

// import bigger from './PP/Components/Pages/assets/bigger-logo.png';
// import smaller from './PP/Components/Pages/assets/smaller-logo.png';

// const Stack = createStackNavigator();

// const HomeScreen = ({navigation}) => (
//   <View style={{flex:1,
//     alignItems:'center',
//     justifyContent:'center',
//     backgroundColor: '#FFFFFF'}}>
//       <Image source={bigger} style={{ width: 350, marginBottom: 70, height: 160, }}/>
//       <CustomButton text="    Sign in    " onPress={()=>navigation.navigate ('Sign in')}/>
//       <CustomButton text="Get Started" onPress={()=>navigation.navigate('Welcome-1')}></CustomButton>
//   </View>
// );

// const SettingScreen = ({navigation}) => (
//   <View style= {styles.container}>
//       <Text style = {styles.headings}>Sign in</Text>
//       <TextInput style = {styles.TextInput} 
//       underlineColorAndroid='transparent' 
//       placeholder="NHS number:"
//       placeholderTextColor='#000000'/>
//       <TextInput style = {styles.TextInput} 
//       placeholder="Password:" secureTextEntry= {true} 
//       underlineColorAndroid={'transparent'}
//       placeholderTextColor='#000000' 
//       />
//       <CustomButton text="Sign in" onPress={()=>{alert("Signing in..")}}>
//         </CustomButton>

//       <View style={{ width: 90, marginRight: 77 }}>
//         <Image source={smaller} style={{ width: 180, marginTop: 240}}/>
//       </View>

//   </View>
// )
// export default class App extends React.Component {
//     render() {
//         return (
//            <NavigationContainer>
//              <Stack.Navigator>
//                <Stack.Screen options={{title:'Home'}}  name="Home" component = {HomeScreen}/>
//                <Stack.Screen name="Sign in" component = {SettingScreen}/>
//                <Stack.Screen name="Welcome-1" component = {OnBoarding1}/>
//                <Stack.Screen name="Welcome-2" component ={OnBoarding2}/>
//                <Stack.Screen name="Welcome-3" component ={OnBoarding3}/>
//                <Stack.Screen name="Mental Health" component={Mental}/>
//              </Stack.Navigator>
//            </NavigationContainer>
//         );
//     }
// }

// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "center",
//       backgroundColor: '#FFFFFF',
//       paddingLeft: 60,
//       paddingRight: 60,
//   },
//   headings: {
//     fontSize: 20,
//     color: '#000000',
//     alignSelf: 'flex-end',
//     borderBottomColor: 'transparent',
//     borderBottomWidth: 1,
//     paddingBottom: 25,
//     paddingTop: 10,
//   },
//   TextInput: {
//     alignSelf: 'stretch',
//     height: 40,
//     marginBottom: 3,
//     marginTop: 10,
//     color: '#000000',
//     borderWidth: 1,
//     borderColor: '#BDBDBD',
//     paddingLeft: 5,
//     paddingBottom: 5,
//   }
// });

