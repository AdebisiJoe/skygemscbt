import React from 'react';
import { View,StyleSheet,ImageBackground,Dimensions,Image } from 'react-native';
import { Card,Text,Avatar } from '@ui-kitten/components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { leaderdata } from './data';


export default function LeaderBoard() {
    return (
    <ImageBackground
      style={styles.homebackground}
      resizeMode="cover"
      source={require('../../../assets/images/homeplain.png')}>
       <View style={{flex:1,flexDirection:'column',alignItems:'center',marginTop:20}}>
            {leaderdata.map((data,index)=>(
                        
                                       
                            <Card style={[styles.longCard1]}>
                                <Avatar shape='square' style={{alignSelf:'flex-start',marginTop:-wp('0%') }} source={require(`../../../assets/rankimages/1.png`)} />
                                <Text style={{alignSelf:'center',marginTop:-wp('5%')}} category='s2' >
                                {data.score}
                                </Text>
                                <Text style={{alignSelf:'flex-end',marginTop:-wp('5%')}} category='s2' >
                                {data.name}
                                </Text>
                            </Card>
                            
                            
                  
            ))} 
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
        marginBottom:wp('5%')
        
      }
});