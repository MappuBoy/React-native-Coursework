import { View, Text } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoginScreen from './screens/LoginScreen/LoginScreen'
import SingUpScreen from './screens/SingUpScreen/SingUpScreen'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import UplodeScreen from './screens/Uplode/UplodeScreen'

const Stack=createNativeStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
        {/* <LoginScreen/> */}
        {/* <SingUpScreen/> */}
        {/* <HomeScreen/> */}
        <UplodeScreen/>
   </NavigationContainer>
  )
}

export default App