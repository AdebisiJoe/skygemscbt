import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React ,{useState,useEffect} from 'react';
import { AppLoading } from "expo";
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import AppNavigator from "./app/components/Navigation/AppNavigator";
import OfflineNotice from "./app/components/Utils/OfflineNotice";
import AuthNavigator from "./app/components/Navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

import OnBoardingScreen from './app/components/onBoarding/OnBoardingScreen';
import LoginScreen from './app/components/Login/LoginScreen';
import Signup from './app/components/Signup/signup';
import HomeScreen from './app/components/Home/HomeScreen';
import Quiz from './app/components/Quiz/Quiz';
import Quiz2 from './app/components/Quiz/Quiz2';
import SelectSchool from './app/components/SelectSchool/SelectSchool';
import SelectSubjects from './app/components/SelectSubjects/SelectSubjects';
import ActivationOptions from './app/components/Activation/ActivationOptions';


const AppStack=createStackNavigator();

const Drawer = createDrawerNavigator();





export default function App() {


  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  
  const [loading, setLoading] = useState(null);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  // if (!isReady)
  //   return (
  //     <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
  //   );


  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthContext.Provider value={{ user, setUser }}>
        
        <NavigationContainer >
          {user ? <AppNavigator /> : <AuthNavigator  />}
        </NavigationContainer>
      </AuthContext.Provider>
    </ApplicationProvider>
  );

}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
