import React,{useEffect} from 'react'
import { View, StyleSheet,Dimensions } from 'react-native'
import { Card,Modal,Text,Button,Avatar } from '@ui-kitten/components';
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height,width}=Dimensions.get('window');

export default function AfterQuiz({showmodal,subjectScores}) {

    const [resultVisible, setResultVisible] = React.useState(false);

    useEffect(()=>{
        setResultVisible(showmodal)
    },[showmodal]);

    const Header = (props) => (
        <View {...props}>
          <Text category='h6' style={{alignSelf:'center'}}>Test Result</Text>
        </View>
      );

    return (
        <View style={{flex:1,height:hp('80%'),width:wp('80%')}}>
           
            <Modal style={{flex:1,height:hp('80%'),width:wp('80%')}} backdropStyle={styles.backdrop} visible={resultVisible}>
                
                
                <Card style={{height:'100%',width:'100%',}} header={Header}>
                <View style={{flex:1,flexDirection:'column'}}>
                {subjectScores.map((data,index)=>(
                   
                     <View style={{marginTop:40}}>
                     
                    <Text style={{alignSelf:'flex-start',}} category='Label' >
                    {data.subject}
                    </Text>
                    <Text style={{alignSelf:'center',marginTop:-wp('5%')}} category='Label' >
                    {data.score}
                    </Text>
                    <Text style={{alignSelf:'flex-end',marginTop:-wp('5%')}} category='Label' >
                    {data.totalScore}
                    </Text>
               
                
                 </View>
                ))}
                 </View>
                   </Card>
                <Button onPress={() =>setResultVisible(!showmodal)}>close</Button>
                
            </Modal>
            
        </View>
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
        
      },
      backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
});