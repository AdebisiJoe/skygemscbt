import React,{useEffect} from 'react'
import { View, StyleSheet,Dimensions } from 'react-native'
import { Card,Modal,Text,Button } from '@ui-kitten/components';
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

const {height,width}=Dimensions.get('window');

export default function AfterQuiz({showmodal,subjectScores}) {

    const [resultVisible, setResultVisible] = React.useState(false);

    useEffect(()=>{
        setResultVisible(showmodal)
    },[showmodal]);

    return (
        <View style={{flex:1,height:height*0.5,width:250}}>
           
            <Modal style={{flex:1,height:height*0.5,width:250}} visible={resultVisible}>
                
                <Text>Here are your test Reults</Text>

                {subjectScores.map((hi,index)=>{
                    console.log("Hello from afterQuiz "+hi.subject+" "+hi.score);

                   })}
                <Button onPress={() =>setResultVisible(!showmodal)}>close</Button>
                
            </Modal>
            
        </View>
    )
}

const styles = StyleSheet.create({

});