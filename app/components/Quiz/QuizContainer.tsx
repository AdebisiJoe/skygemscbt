import React , { ReactElement } from 'react';
import { StyleSheet,View,ImageBackground ,ScrollView} from 'react-native';
import Constants from "expo-constants";
import { StatusBar } from 'expo-status-bar';
import { Card,Button } from '@ui-kitten/components';

interface QuizContainerProps{
    children:ReactElement;
}

export default function QuizContainer({children}:QuizContainerProps) {
    return ( 
        
        <ImageBackground
        style={styles.homebackground}
        resizeMode="cover"
        source={require('../../../assets/images/homeplain.png')}> 
        <View
        >
           {children}  
 
           
      
          
        </View>
        </ImageBackground>
        
    )
}


const styles = StyleSheet.create({
    menuContainer:{
        flex:1
    },
    homebackground:{
        height: '100%',
        width: '100%'
    }
});
