import React,{useRef, Fragment,useState,useEffect} from 'react'
import { StyleSheet, ImageBackground,Dimensions,Image,View,ScrollView} from 'react-native';
import QuizContainer from './QuizContainer';
// import { ScrollView } from 'react-native-gesture-handler';
import Animated,  { multiply} from 'react-native-reanimated';
import QuestionSlide from './QuestionSlide';
import { questions } from './data';
import  {useScrollHandler}  from 'react-native-redash/lib/module/v1';
import { Button,Modal, Layout, Tab, TabView, Text} from '@ui-kitten/components';
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
    Physics_2019,
  } from './QuestionHelper';

import {getQuestions} from './QuizHelper';

import { ButtonSwitch } from './ButtonSwitch';
import Quiz2 from './Quiz2';
import SubjectQuiz from './SubjectQuiz';
import AfterQuiz from '../AfterQuiz/AfterQuiz';

const {height,width}=Dimensions.get('window');

  type questionsObjects= {
    QuestNo: number,
    Questions: string,
    OptionA: string,
    OptionB: string,
    OptionC: string,
    OptionD: string,
    Answers: string
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

  export type subjectScore={
      subject:string,
      score:number,
      totalScore:number
  }



export default function MutipleQuiz({route,navigation}) {
   const { subjects,testTime } = route.params;
   const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
   const [qloading,setqloading]= useState<boolean>(false);
   const [userSelectedAnswers,setUserSelectedAnswers]=useState<currAnswerObjectProps[]>([]); 
  //  const [Questions,setQuestions]=useState<questionsObjects[]>([]);
   const [score,setScore] =useState<number>(0);
   const [subjectScore,setSubjectScore] =useState<subjectScore[]>([]);
   let [curNum,setCurNum]=useState<number>(0);
   const [totalQuestions,setTotalQuestions]=useState<number>(0);
   const [quizOver,setQuizOver] =useState<boolean>(false);
   const [scrolling,setScrolling] = useState<boolean>(false);
   const [Question,setQuestion]= useState<questionsObjects[]>();
   const [Options,setOptions]= useState([]);
   const [QuestionSelectedIndex,setQuestionSelectedIndex]= useState<selectedIndexProps>();
   const [count, setCount] = React.useState(0);
   const [visible, setVisible] = React.useState(false);
   const [showmodal, setShowmodal] = React.useState(false);
   const Questions:questionsObjects[]=Physics_2019;
   const [selectedIndex, setSelectedIndex] = React.useState();

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
         <CountDownHelper   time={testTime} />
       </View>
        
        
      ),
    });
  }, [navigation]);

  const scoresetter=(score,subject,totalScore)=>{
      score={
          score,
          subject,
          totalScore
      }

      setSubjectScore((currScore)=>{
        let newArr = [...currScore];
        return mergeArrayWithObject(newArr,score);
     }
   );  
  }
  function mergeArrayWithObject(arr:subjectScore[],newscore:subjectScore){
    // return   arr && arr.map(t => t.questionNumber === ans.questionNumber ? ans : t);
         var i = arr.findIndex(o => o.subject === newscore.subject);
         if (arr[i]) {
            arr[i] = newscore
            } else { 
              arr.push(newscore)
             };

             return arr;
  }

  const onFinishTestPress = (): void => {
    
    // navigation && navigation.navigate('Quiz');
     
    
    console.log("see current subject score"+subjectScore);
    subjectScore.map((hi,index)=>{
        console.log(hi.totalScore+" "+hi.score);
    })

    // subjectScore.forEach((subject,index)=>{
    //     console.log("hi hi "+subject[0]);
    // });    
    //setShowmodal(true);

  };
   
    return (

        <View>
            <AfterQuiz subjectScores={subjectScore} showmodal={showmodal} />
           
           
           {/* <Modal style={{flex:1,height:height*0.5,width:250}} visible={showmodal}>
               
               <Text>Welcome to UI Kitten 😻</Text>
               <Button onPress={() => setShowmodal(false)}></Button>
               
            </Modal>  */}
           
           
            {/* <View style={{flex:1,height:height*0.5,width:200}}> */}
             
             <Modal style={{flex:1,height:height*0.5,width:250}} visible={visible}>
              
              <Calculator style={{ flex: 1 }} />
               
               <Button status='warning' onPress={() => setVisible(false)}>
                  Close 
               </Button>
              
             </Modal>
             {/* </View> */}
             
           <TabView
            selectedIndex={selectedTabIndex}
            onSelect={index => setSelectedTabIndex(index)}>
            
            {subjects.map((subject,index)=>(
              

             <Tab title={subject}>
                <View style={styles.tabContainer}>
                  <SubjectQuiz Question={Questions} subject={subject} scoresetter={scoresetter}/>
                </View>
             </Tab>

            ))}    

            </TabView>
            <View style={{justifyContent:'center',marginHorizontal:20}}>
              <Button style={{marginTop:20}} onPress={() => onFinishTestPress()}>Submit Test</Button>
            </View>  

        </View>

    )
}

const styles = StyleSheet.create({
    tabContainer: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

