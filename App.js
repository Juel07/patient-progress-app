import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStackScreen from './Components/RootStackScreen';
import MainTabScreen from './Components/MainTabScreen';

const App = () =>{
  return(
    <NavigationContainer>
      <RootStackScreen />
      {/* <MainTabScreen/> */}
    </NavigationContainer>
  );
}

export default App;