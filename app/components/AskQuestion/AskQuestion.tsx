import React from 'react';
import { View,StyleSheet,Dimensions,ImageBackground,Image } from 'react-native';
import { Card,Text,Avatar } from '@ui-kitten/components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function AskQuestion() {
    return (

        <ImageBackground
        style={styles.homebackground}
        resizeMode="cover"
        source={require('../../../assets/images/homeplain.png')}>
        <View style={styles.menuContainer}>
                          
      
                 <Card style={[styles.longCard1]}   >
                 {/* <ImageBackground
                  style={{width:'100%',
                  height:'100%',

                   }}
                  resizeMode="cover"
                  source={require('../../../assets/images/buttonbacgroundfive.png')}> */}
                    <Image resizeMode="contain" style={{ width: 70, height: 70,alignSelf:'flex-start',marginTop:-wp('3%') }} source={require('../../../assets/images/questionicon.png')} />
                    <Text category='s2' style={{alignSelf:'flex-end',marginTop:-wp('12%')}}>
                      Ask the community
                    </Text>
                   {/* </ImageBackground>  */}
                 </Card>
                        

                 <Card style={[styles.longCard1]}   >
                    <Image resizeMode="contain" style={{ width: 70, height: 70,alignSelf:'flex-start',marginTop:-wp('3%') }} source={require('../../../assets/images/communityquestionicon.png')} />
                    <Text category='s2' style={{alignSelf:'flex-end',marginTop:-wp('12%')}}>
                      Ask a tutor
                    </Text>
                 </Card>
               
             
            

        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    menuContainer:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        marginTop:20
    },
    homebackground:{
        height: '100%',
        width: '100%'
    },
    longLayout: {
        flex: 1,        
        height:(12.7/100)*Dimensions.get('window').height,
        width:(87/100)*Dimensions.get('window').width,
        marginBottom:-wp('40%')
      },
      longCard1:{
        flex:1,
        
        maxHeight:(10/100)*Dimensions.get('window').height,
        minWidth:(87/100)*Dimensions.get('window').width,
        borderRadius:10,
        // backgroundColor:'#4EAFC4',
        marginBottom:wp('5%'),

        
      }
});