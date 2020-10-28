import React,{useRef, Fragment,useState,useEffect} from 'react'
import { StyleSheet, ImageBackground,Dimensions,Image,View,ScrollView} from 'react-native';
import QuizContainer from './QuizContainer';
import { questions } from './data';
import WebView from 'react-native-webview';
import { Button,Text,Modal,Card} from '@ui-kitten/components';
import HTML from 'react-native-render-html';
import { Calculator } from 'react-native-calculator'
import Answers from './Answers';
import CountDownHelper from '../Utils/CountDownHelper';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  CRS_2009,
  CRS_2010,
  CRS_2011,
  CRS_2012,
  Literature_2008,
  Literature_2009,
  Literature_2010,
} from './QuestionHelper';

import {getQuestions} from './QuizHelper';

const {height,width}=Dimensions.get('window');


interface questionsObjects {
  QuestNo: number;
  Questions: string;
  OptionA: string;
  OptionB: string;
  OptionC: string;
  OptionD: string;
  Answers: string;
  // Graphics: string;
}


export type currAnswerObjectProps={
  questionNumber:number,
  question:string,
  answer:string,
  answerIsCorrect:boolean,
  correctAnswer:string
}

export type selectedIndexProps={
  questionNumber:number,
  option:string|number,
  index:number|string,
  answerIsCorrect:boolean
}

interface QuestionSlideProps{
    question:string;
}


 

export default  function Quiz2({route,navigation}) {

   const { subjects,testTime } = route.params;
   const [qloading,setqloading]= useState<boolean>(false);
   const [userSelectedAnswers,setUserSelectedAnswers]=useState<currAnswerObjectProps[]>([]); 
  //  const [Questions,setQuestions]=useState<questionsObjects[]>([]);
   const [score,setScore] =useState<number>(0);
   let [curNum,setCurNum]=useState<number>(0);
   const [totalQuestions,setTotalQuestions]=useState<number>(0);
   const [quizOver,setQuizOver] =useState<boolean>(false);
   const [scrolling,setScrolling] = useState<boolean>(false);
   const [Question,setQuestion]= useState<questionsObjects[]>();
   const [Options,setOptions]= useState([]);
   const [QuestionSelectedIndex,setQuestionSelectedIndex]= useState<selectedIndexProps>();
   const [count, setCount] = React.useState(0);
   const [visible, setVisible] = React.useState(false);
   const Questions=Literature_2010;
   
 
  
   
   
    
   const checkIfuserAnswerisCorrect=(questionNo,userAnswer)=>{
     
   }

   const getQuestionSelectedIndex=(userAnswer)=>{
      
       const option=getOptionByAnswer(userAnswer);
       return option[1];
   }



  const getCurrentQuestionIndex=(quNo)=>{
    let currentSelectedIndex:selectedIndexProps=undefined;
    let ifhjgjh=checkifQuestionhasbeensolved(quNo);
    
    if(ifhjgjh==null||ifhjgjh==undefined){
     return currentSelectedIndex;
    }else{
      ifhjgjh.map((ok)=>{
        console.log(ok.answer);
        currentSelectedIndex={
          questionNumber:quNo,
          option:getOptionByAnswer(ok.answer)[0],
          index:getOptionByAnswer(ok.answer)[1],
          answerIsCorrect:ok.answerIsCorrect
      }
      //setQuestionSelectedIndex(currentSelectedIndex);
      });
      return currentSelectedIndex;
    }
  }

   const answerSelected = (answer:string,index:number) =>{
      if(!quizOver){
        //check if the selected answer is the correct answer
        const answerIsCorrect=getAnswerByIndexNumber(Questions[curNum].Answers)===answer;
          console.log("show Questions ans"+Questions[curNum].Answers);
          console.log("Anser that came in "+answer);
         
        //check if the question has been answered before
        const currentQuestionIndex=getCurrentQuestionIndex(curNum);
        
        if(currentQuestionIndex==null){
        //Increment score if answer is correct
        if(answerIsCorrect){
          setScore((score)=>score+1);
        }

        }else{
         
          if(currentQuestionIndex.answerIsCorrect==true){
            if(answerIsCorrect){
              setScore((score)=>score+1);
            }else{
              setScore((score)=>score-1);
            }
          }

        }


        console.log("score is now "+score);
        //save current answer to userselected answer
        const currentAnswerObject ={
          questionNumber:curNum,
          question:Questions[curNum].Questions,
          answer,
          answerIsCorrect,
          correctAnswer:Questions[curNum].Answers
        }



       
        setUserSelectedAnswers((curranswers)=>{
             let newArr = [...curranswers];
             return mergeArrayWithObject(newArr,currentAnswerObject);
          }
        );
        // setUserSelectedAnswers((curranswers)=>[
        //   ...curranswers,
        //   currentAnswerObject]
        //   );
       
      }
   }

   const checkifQuestionhasbeensolved=(qusno)=>{
    return userSelectedAnswers.filter(
      function(userSelectedAnswers) {
        return userSelectedAnswers.questionNumber == qusno
      }
    );
   }

   function mergeArrayWithObject(arr:currAnswerObjectProps[],ans:currAnswerObjectProps){
     // return   arr && arr.map(t => t.questionNumber === ans.questionNumber ? ans : t);
          var i = arr.findIndex(o => o.questionNumber === ans.questionNumber);
          if (arr[i]) {
             arr[i] = ans
             } else { 
               arr.push(ans)
              };

              return arr;
   }

   const getAnswerByIndexNumber=(option)=>{
    if(option=='A')
    {
     return  Questions[curNum].OptionA;
    }else if(option=='B')
    {
     return  Questions[curNum].OptionB;
    }else if(option=='C')
    {
      return  Questions[curNum].OptionC;
    }else if(option=='D')
    {
      return  Questions[curNum].OptionD;
    }else if(option=='E')
    {
      return  Questions[curNum].OptionE;
    }

   }

   const getOptionByAnswer=(answer)=>{

    if(answer==Questions[curNum].OptionA)
    {
     return ['A',0] ;
    }else if(answer==Questions[curNum].OptionB)
    {
     return  ['B',1] ;
    }else if(answer==Questions[curNum].OptionC)
    {
      return  ['C',2] ;
    }else if(answer==Questions[curNum].OptionD)
    {
      return  ['D',3] ;
    }else if(answer==Questions[curNum].OptionE)
    {
      return  ['E',4] ;
    }

   }


   const getQuestion= (index)=>{
         
     return Questions[index].Questions;
   }

   const getOptions= (index)=>{
    
      
       return Questions[index];
   }

   const onFinishTestPress = (): void => {
    
    // navigation && navigation.navigate('Quiz');
     
    console.log(curNum);
    

  };

   useEffect(()=>{
     console.log(userSelectedAnswers); 
    

   },[userSelectedAnswers])
  
   const CalculatorIcon = (props) => (
    <Icon size={25}  name='calculator'/>
  );


   React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
       
       <View style={{flexDirection: "row",justifyContent: "flex-end",paddingRight:10,width:300}}>
          <Button style={{marginLeft:30}} appearance='ghost' status='danger' size='large' accessoryLeft={CalculatorIcon}
            onPress={() => setVisible(true)}
          />
         <CountDownHelper  time={testTime} />
       </View>
        
        
      ),
    });
  }, [navigation, setCount]);
 
    
    return (

      <QuizContainer >
        
        
        <View  style={{flex:1,justifyContent:'center',flexDirection:'column'}}>
        <View style={{flex:1,height:height*0.5,width:200}}>
             <Modal style={{flex:1,height:height*0.5,width:250}} visible={visible}>
              
              <Calculator style={{ flex: 1 }} />
               
               <Button status='warning' onPress={() => setVisible(false)}>
                  Close 
               </Button>
              
             </Modal>
             </View>
          <ScrollView>

             <View  style={{backgroundColor:'white',alignItems:'center'}}>
               <Text category='label'>{curNum+1}/{Questions.length}</Text>
               
             </View>
              <View style={{height:height*0.2,backgroundColor:'white',alignItems:'center',marginHorizontal:15}}>
                 
                  <HTML html={getQuestion(curNum)} imagesMaxWidth={Dimensions.get('window').width}  />
              </View>

              <View style={{flex:1,backgroundColor:"white",height:0.4*height,paddingTop:10}}>
                  
              <Answers data={getOptions(curNum)} answerSelected={answerSelected} currentSelectedIndex={getCurrentQuestionIndex(curNum)} />  
             
              </View>

           
              <View style={{flex:1,backgroundColor:"white",paddingTop:40,}}>

               
                
                <View style={{backgroundColor:'white',flexDirection:'row',justifyContent:'center',width:width,flexWrap: 'wrap'}}> 
                 
                    {Questions.map((_, index)=>(
                      <Fragment key={index}  >
                        
                        <Button appearance='outline' status={getCurrentQuestionIndex(curNum)?'warning':'primary'}   onPress={()=>{
                           setCurNum(index)     
                        }} style={{width:70,height:50,}}>{index+1}</Button>

                      </Fragment>
                      ))}
                     
                </View> 
               
             </View>

            <View style={{justifyContent:'center',marginHorizontal:20}}>
              <Button style={{marginTop:20}} onPress={() => onFinishTestPress()}>Submit Test</Button>
            </View>
                 
           </ScrollView>


        </View>
           

      </QuizContainer>
    )
}
