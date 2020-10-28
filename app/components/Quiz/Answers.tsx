import React,{Fragment,useEffect} from 'react'
import { View,Dimensions } from 'react-native'
import { Radio, RadioGroup, } from '@ui-kitten/components';
const {height,width}=Dimensions.get('window');

export type selectedIndexProps={
  questionNumber:number,
  option:string|number,
  index:number|string,
  answerIsCorrect:boolean
}

interface AnswersProps {
  data:any;
  onPress?:()=>void;
  answerSelected:(answer:string,index:number) =>void;
  currentSelectedIndex?:selectedIndexProps;
}

export default function Answers({data,answerSelected,currentSelectedIndex}:AnswersProps) {
      
  const [selectedIndex, setSelectedIndex] = React.useState();

  useEffect(()=>{
    if(currentSelectedIndex==undefined){
      setSelectedIndex(null);
    }else{
      
        console.log("logging from answers"+currentSelectedIndex.option);
        setSelectedIndex(currentSelectedIndex.index);
    }   
  })

 function convertJsonToArray(data:any):string[]{
    var result:string[]=[];

      for(var i in data){
        result.push(data[i]);
      }

    return result;
  }

    return (

    <View style={{width:width,padding:20,flexDirection:'row',justifyContent:'center'}}>
       <RadioGroup
        selectedIndex={selectedIndex}
        onChange={index =>{ 
          setSelectedIndex(index)
          answerSelected(convertJsonToArray(data)[index+2],index)
          }}> 

        <Radio >
          {data.OptionA}
        </Radio>

        <Radio >
          {data.OptionB}
        </Radio>

        <Radio >
          {data.OptionC}
        </Radio>

        <Radio >
          {data.OptionD}
        </Radio>

        {/* {data.OptionE ? <Radio>{data.OptionE}</Radio>:null } */}
      </RadioGroup>
    </View> 

    )
}
