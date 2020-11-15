import React from 'react';
import { View,StyleSheet,Dimensions,ImageBackground,Image } from 'react-native';
import { Card,Text,Avatar } from '@ui-kitten/components';
import PaystackWebView from 'react-native-paystack-webview';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function ActivationOptions() {

  const childRef = React.useRef();

   const uuid=()=>{
    return Math.floor((Math.random() * 1000000000) + 1)
   }

   const goToActivatePage=()=>{
    return Math.floor((Math.random() * 1000000000) + 1)
   }
 
    return (

        <ImageBackground
        style={styles.homebackground}
        resizeMode="cover"
        source={require('../../../assets/images/homeplain.png')}>

         
        <View style={styles.menuContainer}>


       
                      
                     
                 <Card style={[styles.longCard1]} onPress={()=> childRef.current.StartTransaction()}  >
                    <Image resizeMode="contain" style={{ width: 70, height: 70,alignSelf:'flex-start',marginTop:-wp('3%') }} source={require('../../../assets/images/creditcard.png')} />
                    <Text category='s2' style={{alignSelf:'flex-end',marginTop:-wp('12%')}}>
                      Activate using Credit Card
                    </Text>
                 </Card>

                 <Card style={[styles.longCard1]}   >
                    <Image resizeMode="contain" style={{ width: 70, height: 70,alignSelf:'flex-start',marginTop:-wp('3%') }} source={require('../../../assets/images/secure.png')} />
                    <Text category='s2' style={{alignSelf:'flex-end',marginTop:-wp('12%')}}>
                      Activate using code
                    </Text>
                 </Card>
               
              <PaystackWebView
              showPayButton={false}
              paystackKey="pk_test_b5fd09baa0b5a65d8553f1ed79b2f0bb07a704a0"
              amount={1000}
              billingEmail="skygatesonlineacademy@gmail.com"
              billingMobile="09787377462"
              billingName="SkyGems"
              //ActivityIndicatorColor="green"
              SafeAreaViewContainer={{marginTop: 5}}
              SafeAreaViewContainerModal={{marginTop: 5}}
              onCancel={(e) => {  }}
              onSuccess={(tranRef) => { console.log(tranRef)  }}
              refNumber={uuid()} 
              ref={childRef}
            /> 
            

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
        marginBottom:wp('5%')
        
      }
});