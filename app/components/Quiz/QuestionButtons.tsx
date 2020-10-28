import React from 'react';
import { View ,Dimensions} from 'react-native';
import { Button, } from '@ui-kitten/components';
const {width,height } =Dimensions.get('window');

export default function QuestionButtons(props) {
    return (
    
      
         
         <Button  style={{width:40,height:40}} >{props.index}</Button>
     
     

    )
}
