import React from 'react';
import { View,StyleSheet,Dimensions,ImageBackground } from 'react-native';
import { Card,Text } from '@ui-kitten/components';


export default function ActivationOptions() {
    return (

        <ImageBackground
        style={styles.homebackground}
        resizeMode="cover"
        source={require('../../../assets/images/homeplain.png')}>
        <View style={styles.menuContainer}>
           
              <Card style={styles.pincode}>
                  
                  <Text>Activate using Pin code</Text>
              </Card>
        
           
              <Card style={styles.paystack}>
                 
                  <Text>Activate using Paystack</Text>
              </Card>
             
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    menuContainer:{
        flex:1,
        flexDirection:'column'
    },
    homebackground:{
        height: '100%',
        width: '100%'
    },
    paystack:{
        maxHeight:(12.7/100)*Dimensions.get('window').height,
        minWidth:(87/100)*Dimensions.get('window').width,
        borderRadius:10,
        backgroundColor:'#FCB557',
        marginTop:12
    },
    pincode:{
        maxHeight:(12.7/100)*Dimensions.get('window').height,
        minWidth:(87/100)*Dimensions.get('window').width,
        borderRadius:10,
        backgroundColor:'#FCB557',
        marginTop:12
    }
});
