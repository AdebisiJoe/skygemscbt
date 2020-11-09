import React from 'react'
import OnBoardingScreen from '../onBoarding/OnBoardingScreen';
import LoginScreen from '../Login/LoginScreen';
import Signup from '../Signup/signup';
import HomeScreen from '../Home/HomeScreen';
import Quiz from '../Quiz/Quiz';
import Quiz2 from '../Quiz/Quiz2';
import MutipleQuiz from '../Quiz/MutipleQuiz';
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import SelectSchool from '../SelectSchool/SelectSchool';
import SelectSubjects from '../SelectSubjects/SelectSubjects';
import ActivationOptions from '../Activation/ActivationOptions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ImageBackground, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Divider, Drawer, DrawerItem } from '@ui-kitten/components';
import AuthNavigator from './AuthNavigator';
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();


export default function AppNavigator({ navigation}) {

  

    return (

      <Stack.Navigator>   
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '',headerStyle: { backgroundColor: '#F0F4FF'} }} />
        <Stack.Screen name="SelectSchool" component={SelectSchool} options={{ title: 'Select School',headerStyle: {backgroundColor: '#F0F4FF'} }} />
        <Stack.Screen name="SelectSubjects" component={SelectSubjects} options={{ title: 'Select Subjects',headerStyle: {backgroundColor: '#F0F4FF'} }} />
        <Stack.Screen name="Quiz" component={MutipleQuiz} options={{ title: 'Exam' ,headerStyle: { backgroundColor: '#F0F4FF'} }} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoard} options={{ title: 'Leader Board',headerStyle: {backgroundColor: '#F0F4FF'} }} />  
        <Stack.Screen name="ActivationOptions" component={ActivationOptions}  options={{ title: 'Activation Options',headerStyle: {backgroundColor: '#F0F4FF' } }} />
    </Stack.Navigator> 

    )
}

