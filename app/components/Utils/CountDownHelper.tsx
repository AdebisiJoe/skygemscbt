import React from 'react'
import { StyleSheet, ImageBackground,Dimensions,Image,View,ScrollView} from 'react-native';
import CountDown from 'react-native-countdown-component';

export default function CountDownHelper({time}) {
    return (

        <CountDown
        size={15}
        until={time*60}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#00003F'}}
        digitTxtStyle={{color: '#00003F'}}
        timeLabelStyle={{color: '#00003F', fontWeight: 'bold'}}
        separatorStyle={{color: '#00003F'}}
        timeToShow={[ 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
        style={{marginBottom:-5}}
      />
      
    )
}
