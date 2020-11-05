import React,{useState,useEffect} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-community/async-storage';
import Login from "../Login/LoginScreen";
import Signup from "../Signup/signup";
import OnBoardingScreen from "../onBoarding/OnBoardingScreen";
import Quiz from '../Quiz/Quiz';
import Quiz2 from '../Quiz/Quiz2';
import MutipleQuiz from '../Quiz/MutipleQuiz';
import SelectSchool from '../SelectSchool/SelectSchool';
import SelectSubjects from '../SelectSubjects/SelectSubjects';
import ActivationOptions from '../Activation/ActivationOptions'
import HomeScreen from '../Home/HomeScreen';
import LeaderBoard from "../LeaderBoard/LeaderBoard";


const Stack = createStackNavigator();




export default function AuthNavigator() {
    const [firstLaunched, setFirstLaunched] = useState("");

    const getIfAppOnboarded = async () => {
      
        await AsyncStorage.getItem('first_time').then(response => {
          console.log(response);
          if (response) {
            setFirstLaunched(response);
          }
        });
       
    }

    useEffect(() => {
        getIfAppOnboarded()     
    });




    if(firstLaunched!='true'){
    return (
    
    <Stack.Navigator>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SelectSchool" component={SelectSchool} />
        <Stack.Screen name="SelectSubjects" component={SelectSubjects} />
        <Stack.Screen name="Quiz" component={MutipleQuiz} options={{ title: 'Exam' }} />
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Signup}  options={{ headerShown: false }} />
    </Stack.Navigator> 
  
    
    )
    }else{
     return (
      
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home',headerStyle: { backgroundColor: '#F0F4FF'} }} />
        <Stack.Screen name="SelectSchool" component={SelectSchool} options={{ title: 'Select School',headerStyle: {backgroundColor: '#F0F4FF'} }} />
        <Stack.Screen name="SelectSubjects" component={SelectSubjects} options={{ title: 'Select Subjects',headerStyle: {backgroundColor: '#F0F4FF'} }} />
        <Stack.Screen name="Quiz" component={MutipleQuiz} options={{ title: 'Exam' ,headerStyle: { backgroundColor: '#F0F4FF'} }} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoard} options={{ title: 'Leader Board',headerStyle: {backgroundColor: '#F0F4FF'} }} />
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Signup}  options={{ headerShown: false }} />
        <Stack.Screen name="ActivationOptions" component={ActivationOptions}  options={{ title: 'Activation Options',headerStyle: {backgroundColor: '#F0F4FF' } }} />
    </Stack.Navigator> 
  
    )
    }
}



