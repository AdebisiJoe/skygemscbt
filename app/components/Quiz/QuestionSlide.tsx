import React from 'react';
import { View, Dimensions,Image } from 'react-native';
import { Layout, Text,Input,Button } from '@ui-kitten/components';
const {width,height } =Dimensions.get('window');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface QuestionSlideProps{
    Questions:string;
    index:number;
}

export default function QuestionSlide({Questions,index}: QuestionSlideProps) {
    return (
        <View style={{width,alignItems:'center',padding:20}}>
            <Text category='h5' style={{marginTop:5}}  >Question {index}/50</Text>
            <Text category='s1' style={{marginTop:20}}  >{Questions}</Text>
            <Image resizeMode="contain" style={{ width: wp('30%'), height: 70,alignSelf:'center',marginTop:wp('2%') }} source={require('../../../assets/images/studying.png')} />    
        </View>
    )
}
