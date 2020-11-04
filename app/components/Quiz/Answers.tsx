import React,{Fragment,useEffect} from 'react'
import { View,Dimensions } from 'react-native'
import { Radio, RadioGroup,Text } from '@ui-kitten/components';
import HTML from 'react-native-render-html';
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

    <View style={{width:width,padding:20,flexDirection:'row',justifyContent:'center',marginHorizontal:15,flexWrap: 'wrap'}}>
       <RadioGroup
        selectedIndex={selectedIndex}
        onChange={index =>{ 
          setSelectedIndex(index)
          answerSelected(convertJsonToArray(data)[index+2],index)
          }}> 

        <Radio >
        {evaProps => 
          <HTML html={data.OptionA} imagesMaxWidth={Dimensions.get('window').width}  />
          }
        </Radio>

        <Radio >
          {evaProps => 
          <HTML html={data.OptionB} imagesMaxWidth={Dimensions.get('window').width}  />
          }
          
        </Radio>

        <Radio >
        {evaProps => 
          <HTML html={data.OptionC} imagesMaxWidth={Dimensions.get('window').width}  />
          }
        </Radio>

        <Radio >
        {evaProps => 
          <HTML  html={data.OptionD} imagesMaxWidth={Dimensions.get('window').width}  />
          }
        </Radio>

        {data.OptionE ? 
          <Radio>       
            {evaProps => 
              <HTML  html={data.OptionD} imagesMaxWidth={Dimensions.get('window').width}  />
            }
          </Radio>:null } 
      </RadioGroup>
    </View> 

    )
}
