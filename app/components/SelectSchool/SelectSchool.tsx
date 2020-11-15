import React from 'react';
import { StyleSheet, View, ImageBackground,Dimensions,Image} from 'react-native';
import { Text,Card,TopNavigationAction } from '@ui-kitten/components';
  import Icon from 'react-native-vector-icons/FontAwesome5';
  import { schoolsubjects } from '../SelectSubjects/schoolsubjects';



export default function SelectSchool({ navigation }:any) {

  const BackIcon = () => (
    <Icon  name='arrow-left'/>
  );

  const goBack = (): void => {
    navigation && navigation.goBack();
    
  };

  
  
  const BackAction = () => (
    //navigation && navigation.goBack();
    <TopNavigationAction icon={BackIcon} onPress={goBack}/>
    
  );
  

  const onSelectSchoolCardPress = (schoolname): void => {
    
    navigation && navigation.navigate('SelectSubjects',{
      schoolname
    });
    
  };

    return (

      

    <ImageBackground

      style={styles.selectschoolbackground}
      resizeMode="cover"
      source={require('../../../assets/images/homeplain.png')}> 
        {/* <TopNavigation
          accessoryLeft={BackAction}
          title='back'
       />  */}

        <View style={{flex:1,flexDirection:'column',paddingVertical: 24,paddingHorizontal:16}} >
        
        {schoolsubjects.map(({school}, index)=>(

         <Card style={{height:50}} onPress={()=>onSelectSchoolCardPress(school)} key={index} >                   
              <Text  category='s2'>
              {school}
             </Text>                     
         </Card>

          ))}

        </View>
      </ImageBackground>  
    )
}


const styles = StyleSheet.create({
  selectschoolbackground:{
    height:'100%',
    width:'100%'
   },
});