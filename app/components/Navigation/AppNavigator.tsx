import React from 'react'
import OnBoardingScreen from '../onBoarding/OnBoardingScreen';
import LoginScreen from '../Login/LoginScreen';
import Signup from '../Signup/signup';
import HomeScreen from '../Home/HomeScreen';
import Quiz from '../Quiz/Quiz';
import Quiz2 from '../Quiz/Quiz2';

import SelectSchool from '../SelectSchool/SelectSchool';
import SelectSubjects from '../SelectSubjects/SelectSubjects';
import ActivationOptions from '../Activation/ActivationOptions';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
    return (

     <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />  
        <Drawer.Screen name="SelectSchool" component={SelectSchool} />
        <Drawer.Screen name="SelectSubjects" component={SelectSubjects} />
        <Drawer.Screen name="Quiz2" component={Quiz2} />
        <Drawer.Screen name="ActivationOptions" component={ActivationOptions} />
      </Drawer.Navigator>

    )
}
