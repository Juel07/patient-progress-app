// import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';

// import { DrawerContent } from './DrawerContent';

// import Feed from './Feed';
// import About from './About';
// import Settings from './Settings';
// import SignInScreen from './Sign-in';

// const Drawer = createDrawerNavigator();

// const FeedStack = createStackNavigator();
// const AboutStack = createStackNavigator();
// const SignOutStack = createStackNavigator();
// const SettingStack = createStackNavigator();

// const AppDrawer = () => {

//         return (
//             <NavigationContainer>
//                 <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
//                     <Drawer.Screen name="Feed" component={FeedScreen} />
//                     <Drawer.Screen name="About" component={AboutScreen} />
//                     <Drawer.Screen name="Sign Out" component={SignInScreen} />
//                 </Drawer.Navigator>
//             </NavigationContainer>
//         );
// }
// export default AppDrawer;

// const FeedScreen = ({ navigation }) => (
//     <FeedStack.Navigator screenOptions={{
//         headerStyle: {
//             backgroundColor: '#fff',
//         },
//         headerTintColor: '#black',
//         headerTitleStyle: {
//             fontWeight: 'bold'
//         }
//     }}>
//         <FeedStack.Screen name="Feed" component={Feed} options={{
//             title: 'Contact',
//             headerLeft: () => (
//                 <Ionicons.Button name="md-menu" backgroundColor='#fff' color='black' size={40} />
//             )
//         }} />
//     </FeedStack.Navigator>
// );

// const AboutScreen = ({ navigation }) => (
//     <AboutStack.Navigator screenOptions={{
//         headerStyle: {
//             backgroundColor: '#fff',
//         },
//         headerTintColor: '#black',
//         headerTitleStyle: {
//             fontWeight: 'bold'
//         }
//     }}>
//         <AboutStack.Screen name="About" component={About} options={{
//             title: 'About',
//             headerLeft: () => (
//                 <Ionicons.Button name="md-menu" backgroundColor='#fff' color='black' size={40} />
//             )
//         }} />
//     </AboutStack.Navigator>
// );
