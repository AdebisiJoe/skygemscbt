import React,{useRef, Fragment,useState,useEffect} from 'react'
import { StyleSheet, ImageBackground,Dimensions,Image,Text} from 'react-native';
import QuizContainer from './QuizContainer';

import Animated,  { multiply} from 'react-native-reanimated';
import QuestionSlide from './QuestionSlide';
import { questions } from './data';
import  {useScrollHandler}  from 'react-native-redash/lib/module/v1';
import { Button} from '@ui-kitten/components';

import Answers from './Answers';


const {height,width}=Dimensions.get('window');


interface questionsObjects {
  QuesNo: string;
  Questions: string;
  OptionA: string;
  OptionB: string;
  OptionC: string;
  OptionD: string;
  Answers: string;
  Graphics: string;
}


export type currAnswerObjectProps={
  questionNumber:number,
  question:string,
  answer:string,
  answerIsCorrect:boolean,
  correctAnswer:string
}
interface QuestionSlideProps{
    question:string;
}

export default function Quiz({route,navigation}) {


  const { subjects } = route.params;
  

   const {x,scrollHandler} = useScrollHandler();

   const scroll=useRef<Animated.ScrollView>(null);


   const [qloading,setqloading]= useState<boolean>(false);
   const [userSelectedAnswers,setUserSelectedAnswers]=useState<currAnswerObjectProps[]>([]); 
  //  const [Questions,setQuestions]=useState<questionsObjects[]>([]);
   const [score,setScore] =useState<number>(0);
   let [curNum,setCurNum]=useState<number>(1);
   const [totalQuestions,setTotalQuestions]=useState<number>(0);
   const [quizOver,setQuizOver] =useState<boolean>(false);
   const [scrolling,setScrolling] = useState<boolean>(false);



   const checkIfuserAnswerisCorrect=(questionNo,userAnswer)=>{
     
   }

   const Questions:questionsObjects[]=questions;

   const answerSelected = (answer:string,index:number) =>{
      if(!quizOver){
        //check if the selected answer is the correct answer
        const answerIsCorrect=Questions[curNum].Answers===answer;

        //Increment score if answer is correct
        if(answerIsCorrect){
          setScore((score)=>score+1);
        }
        //save current answer to userselected answer
        const currentAnswerObject ={
          questionNumber:curNum,
          question:Questions[curNum].Questions,
          answer,
          answerIsCorrect,
          correctAnswer:Questions[curNum].Answers
        }

        setUserSelectedAnswers((curranswers)=>[
          ...curranswers,
          currentAnswerObject]
          );

       
      }
   }

   const ontakeTestPress = (): void => {
    
    // navigation && navigation.navigate('Quiz');
     
    console.log(curNum);
    

  };

   useEffect(()=>{
     console.log(userSelectedAnswers);
   },[userSelectedAnswers])

   
    
    return (

      <QuizContainer >
        
        <Animated.View  style={{flex:1,justifyContent:'flex-start',flexDirection:'column'}}>
          <Animated.ScrollView>

              <Animated.View style={{height:height*0.4,backgroundColor:'white'}}>

                <Animated.ScrollView 

                 ref={scroll}

                 horizontal
                 snapToInterval={width} 
                 decelerationRate="fast" 
                 bounces={false}
                 scrollEventThrottle={16}
                 {...scrollHandler}
                 >
                    {Questions.map(({Questions}, key)=>(
                        
                       
                       <Fragment key={key}>
                            
                           <QuestionSlide  {... {Questions,key }} index={curNum=+1} />
                           
                           
      
                       </Fragment>
                       
                    ))} 
                    
                </Animated.ScrollView>

              </Animated.View>

              <Animated.View style={{flex:1,backgroundColor:"white",height:0.4*height,paddingTop:10}}>
                   
                  <Animated.View style={{
                            
                         backgroundColor:'white',
                         width:width*questions.length,
                         flexDirection:'row',
                         transform:[{translateX:multiply(x,-1) }],
                       
                         }}>

                          {Questions.map((data,index)=>(

                            
                            <Fragment key={index}>
                                <Answers data={data} answerSelected={answerSelected}  /> 
                            </Fragment>

                          ))}

                  </Animated.View>
              </Animated.View>

           
              <Animated.View style={{flex:1,backgroundColor:"white",paddingTop:40,}}>

               <Animated.ScrollView>
                
                <Animated.View style={{backgroundColor:'white',flexDirection:'row',justifyContent:'center',width:width,flexWrap: 'wrap'}}> 
                 
                    {Questions.map((_, index)=>(
                      <Fragment key={index}>
                        
                        <Button appearance='outline'  onPress={()=>{scroll.current?.getNode().scrollTo({
                          x:width*(index),
                          animated:true,
                        })}} style={{width:70,height:50,}}>{index+1}</Button>
                      </Fragment>
                      ))}
                     
                </Animated.View> 
               </Animated.ScrollView>
             </Animated.View>
                 
           </Animated.ScrollView>

           <Animated.View>
           <Button style={{marginTop:20}} onPress={() => ontakeTestPress()}>Submit Test</Button>
           </Animated.View>
        </Animated.View>
           

      </QuizContainer>
    )
}
