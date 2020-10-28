import React , { ReactElement } from 'react';
import { StyleSheet,View,ImageBackground } from 'react-native';
import Constants from "expo-constants";
import { StatusBar } from 'expo-status-bar';

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
        style={{paddingTop:Constants.statusBarHeight,flex:1,}}>
           {children}    
           <StatusBar style="light" />
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
