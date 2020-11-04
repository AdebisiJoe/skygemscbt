import React,{useState,useEffect} from 'react'
import { Dimensions,View,ScrollView, ImageBackground,StyleSheet} from 'react-native';
import QuizContainer from './QuizContainer';
import { Button,Text,Modal} from '@ui-kitten/components';
import HTML from 'react-native-render-html';
import { Calculator } from 'react-native-calculator'
import Answers from './Answers';
import FloatingActionButton from '@lucasmrc435/rn-fab'



import { ButtonSwitch } from './ButtonSwitch';

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


 

export default  function SubjectQuiz({Question,scoresetter,subject}) {

   const [qloading,setqloading]= useState<boolean>(false);
   const [userSelectedAnswers,setUserSelectedAnswers]=useState<currAnswerObjectProps[]>([]); 
  //  const [Questions,setQuestions]=useState<questionsObjects[]>([]);
   const [score,setScore] =useState<number>(0);
   let [curNum,setCurNum]=useState<number>(0);
   const [totalQuestions,setTotalQuestions]=useState<number>(0);
   const [quizOver,setQuizOver] =useState<boolean>(false);
   const [scrolling,setScrolling] = useState<boolean>(false);
   const [Questions,setQuestions]= useState<questionsObjects[]>(Question);
   const [Options,setOptions]= useState([]);
   const [QuestionSelectedIndex,setQuestionSelectedIndex]= useState<selectedIndexProps>();
   const [count, setCount] = React.useState(0);
   const [visible, setVisible] = React.useState(false);
   const [selectedIndex, setSelectedIndex] = React.useState();
   
   
    
   const checkIfuserAnswerisCorrect=(questionNo,userAnswer)=>{
     
   }

   const getQuestionSelectedIndex=(userAnswer)=>{
      
       const option=getOptionByAnswer(userAnswer);
       return option[1];
   }



  const getCurrentQuestionIndex=(quNo)=>{
    let currentSelectedIndex:selectedIndexProps=undefined;
    let ifhjgjh=checkifQuestionhasbeensolved(quNo);
    console.log("what came in "+quNo);
    
    // if(quNo==0){
    //   return currentSelectedIndex;
    // }

    if(ifhjgjh==null||ifhjgjh==undefined){
     return currentSelectedIndex;
    }else{
      // ifhjgjh.map((ok)=>{
        console.log("here is the quessolved log "+ifhjgjh.answer);
        currentSelectedIndex={
          questionNumber:quNo,
          option:getOptionByAnswer(ifhjgjh.answer)[0],
          index:getOptionByAnswer(ifhjgjh.answer)[1],
          answerIsCorrect:ifhjgjh.answerIsCorrect
        }
      //setQuestionSelectedIndex(currentSelectedIndex);
      // });
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
        const QuestionCount=Questions.length;
        if(currentQuestionIndex==null){
            //Increment score if answer is correct
            
            if(answerIsCorrect){
              setScore((score)=>score+1);
              
            }
    
            }else{
             
              if(currentQuestionIndex.answerIsCorrect==true){
                if(answerIsCorrect){
                  setScore((score)=>score);
                 
                }else{
                  setScore((score)=>score-1);
                  
                }
              }else{
                if(answerIsCorrect){
                  setScore((score)=>score+1);
                  
                }else{
                  setScore((score)=>score);
                  
                }
              }
    
            }

        
        scoresetter(score,subject,QuestionCount);
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
    // return userSelectedAnswers.filter(
    //   function(userSelectedAnswers) {
    //     return userSelectedAnswers.questionNumber == qusno
    //   }
    // );

    for (var i = 0; i < userSelectedAnswers.length; i++) {
      if (userSelectedAnswers[i].questionNumber == qusno) {
          return(userSelectedAnswers[i]);
      }
  }
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
   })
  
 



 
    
    return (
      

      <QuizContainer >
        
        
        <View  style={{flex:1,justifyContent:'center',flexDirection:'column'}}>

          <ScrollView>

             <View  style={{backgroundColor:'white',alignItems:'center'}}>
               <Text category='label'>{curNum+1}/{Questions.length}</Text>
               
             </View>
              <View style={{height:height*0.2,backgroundColor:'white',alignItems:'center',marginHorizontal:15,}}>
                 
                  <HTML html={getQuestion(curNum)} imagesMaxWidth={Dimensions.get('window').width}  />
              </View>

              <View style={{flex:1,backgroundColor:"white",height:0.4*height,paddingTop:10,marginVertical:15,flexWrap: 'wrap'}}>
                  
                 <Answers data={getOptions(curNum)} answerSelected={answerSelected} currentSelectedIndex={getCurrentQuestionIndex(curNum)} />  
             
              </View>

           
              <View style={{flex:1,backgroundColor:"white",paddingTop:40,}}>

               
                
                <View style={{backgroundColor:'white',flexDirection:'row',justifyContent:'center',width:width,flexWrap: 'wrap'}}> 
                <ButtonSwitch  selectedIndex={selectedIndex}
                    onSelect={index => {
                      setSelectedIndex(index)
                      console.log("index logged here "+index)
                      setCurNum(index) 
                      }}>

                    {Questions.map((_, ok)=>(
  
                        <Button key={ok} 
                                appearance='outline'
                                
                                 onPress={()=>{
                           setCurNum(ok)  
                             
                        }} style={{width:70,height:50,}}>{ok+1}</Button>
                      
                     
                      
                      ))}
                    </ButtonSwitch>
                </View> 
               
             </View>

            <View style={{justifyContent:'center',marginHorizontal:20}}>
              {/* <Button style={{marginTop:20}} onPress={() => onFinishTestPress()}>Submit Test</Button> */}
              

              <FloatingActionButton 
                  color="red" 
                  position="right"
                  icon='arrow-right'
                  onPress={() => {
                    if(curNum!=Questions.length-1)
                     {
                       setCurNum(curNum=curNum+1)
                     }else{
                       setCurNum(Questions.length-1)
                     }
                   }}
                  />
                 <FloatingActionButton 
                  color="red" 
                  position="left"
                  icon='arrow-left'
                  onPress={() => {
                    if(curNum!=0)
                     {
                       setCurNum(curNum=curNum-1)
                     }else{
                       setCurNum(0)
                     }
                   }}
                  />
            </View>
            
           </ScrollView>


        </View>
           

      </QuizContainer>
      
    )
}


