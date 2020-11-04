import React from 'react';
import { StyleSheet, View, ImageBackground,Dimensions,Image, ScrollView} from 'react-native';
import { schoolsubjects } from './schoolsubjects';
import { ApplicationProvider,Text,Input,Button,Card,
    TopNavigation, TopNavigationAction,Radio,CheckBox,
    Select, SelectItem,IndexPath } from '@ui-kitten/components';
import CheckBoxhelper from './CheckBoxhelper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Snackbar from 'react-native-snackbar';
export type currSubjectsYears={
    subject:string,
    year:number
  }

  const data = [
    '10 minutes',
    '20 minutes',
    '30 minutes',
    '40 minutes',
    '50 minutes',
    '60 minutes',
  ];

  const timeMinutes = [
    10,
    20,
    30,
    40,
    50,
    60,
  ];

//   const useSelectState = (initialState = undefined) => {
//     const [selectedIndex, setSelectedIndex] = React.useState(initialState);
//     return { selectedIndex, onSelect: setSelectedIndex };
//   };


export default function SelectSubjects({route,navigation}) {
    
    const [checked, setChecked] = React.useState(false);
    const [testSubjects, setTestSubjects] = React.useState([]);
    const [subjectsYears,setSubjectsYears] =React.useState<currSubjectsYears[]>([]);
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
    const [selectedTestTime, setSelectedTestTime] = React.useState(new IndexPath(0));
    const [value, setValue] = React.useState('');
    const [testTime, setTestTime] = React.useState<number>(10);
    const displayValue = data[selectedTestTime.row];

    //const theselector=useSelectState();

    const BackIcon = () => (
        <Icon  name='arrow-left'/>
      );
    
      const goBack = (): void => {
        navigation && navigation.goBack();
        
      };
    
      
      
      const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={goBack}/> 
      );


    const { schoolname } = route.params;

     function getSchoolsubjects(): any {

     const data= schoolsubjects.find(item=>item.school==schoolname); 
      // data['subjects'];
      //console.log(data['subjects']['English']);
      const subjects: string []  = Object.keys(data.subjects);

      return subjects;
       
    }

    function getSchoolSchoolYears(subject:string):any{
        const data= schoolsubjects.find(item=>item.school==schoolname); 
        return data['subjects'][subject];
    }

    const onSelectSubjectsCardPress = (schoolname): void => {
    
        navigation && navigation.navigate('Quiz');
        
      };

      const ontakeTestPress = (subjects:string[]): void => {
        
        if(subjects.length<1){
          
          // Snackbar.show({
          //   text: 'Please pick a subject',
          //   duration: Snackbar.LENGTH_LONG,
          // });
          alert('pick a subject');
        }else{
        navigation && navigation.navigate('Quiz',{
            subjects,
            testTime
          });

        }

      };

      const setSubjects= (subject) => {

        let checked = checkSubjects(testSubjects,subject);
          
           
        if (checked==false) {
            // add schoolId to user.schools
            setTestSubjects([...testSubjects,subject]);
            
        } else {
            // remove schoolId from user.schools
   
            setTestSubjects(testSubjects.filter(item => item !== subject));

        }
    }

    const checkSubjects=(subjects:string[] = [],subject:string)=>{
         
        if(typeof subjects.includes == 'undefined'){
            var arrLength = subjects.length;
            for (var i = 0; i < arrLength; i++) {
                if (subjects[i] == subject) {
                    return true;
                }
            }
            return false;
        }
        return subjects.includes(subject);
    }

   const checkSchoolYear=(schoolyears,subject,year)=>{

    }

  const logSelectedTime=(index)=>{
     setTestTime(timeMinutes[index.row]);
     console.log(timeMinutes[index.row])
   }
 
    return (
      <ImageBackground
      style={styles.homebackground}
      resizeMode="cover"
      source={require('../../../assets/images/homeplain.png')}>
        <View style={{flex:1,flexDirection:'column'}}>

        <ScrollView  style={{paddingVertical: 24,paddingHorizontal:16}}>
 
        <View style={{marginTop:wp('10%')}}>
           <Text category='p1' style={{alignSelf:'flex-start',marginBottom:-wp('8%'),}}>Set Test Time</Text>
           <Select
                style={{alignSelf:'flex-end',width:wp('50%')}}
                selectedIndex={selectedTestTime}
                placeholder='Select Time'
                value={displayValue}   
                onSelect={index => {
                  setSelectedTestTime(index)
                  logSelectedTime(index)
                  }}>
                <SelectItem title='10'/>
                <SelectItem title='20'/>
                <SelectItem title='30'/>
                <SelectItem title='40'/>
                <SelectItem title='50'/>
                <SelectItem title='60'/>
           </Select>
        </View>  

        {        
       
        getSchoolsubjects().map((subject, key)=>(

         <Card style={{height:wp('15%'),marginTop:20}}  key={key} >  

            <View >
              <CheckBox style={{alignSelf:'flex-start'}} checked={checkSubjects(testSubjects,subject)} onChange={()=>setSubjects(subject)} >
                     {subject}         
              </CheckBox> 
            </View>  

            <View>
             {/* <Select style={{alignSelf:'flex-end',marginTop:-wp('8%')}}
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}
                placeholder='Select year'
                value={getSchoolSchoolYears(subject)[selectedIndex.row]}
                >

                 {getSchoolSchoolYears(subject).map((year:number, index:number)=>(
                    <SelectItem    key={index} title={year}/>
                )) }    
                
              </Select> */}
            </View>               
                

                      
         </Card>

          ))}
          <Button style={{marginTop:20}} onPress={() => ontakeTestPress(testSubjects)}>Take test</Button>
        </ScrollView>

        </View>
       </ImageBackground>
    )
}

const styles = StyleSheet.create({
  menuContainer:{
      flex:1
  },
  homebackground:{
      height: '100%',
      width: '100%'
  }});