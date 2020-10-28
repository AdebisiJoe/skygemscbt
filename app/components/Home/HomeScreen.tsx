import React from 'react';
import { StyleSheet, View, ImageBackground,Dimensions,Image,ScrollView} from 'react-native';
import { ApplicationProvider, Layout, Text,Input,Button,Card,List,
     ListElement, ListItemElement, ListProps,Divider } from '@ui-kitten/components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';    
import useAuth from '../../auth/useAuth'; 

export default function HomeScreen({navigation}:any) {
  const { user, logOut } = useAuth();
    const onStudyPress = (): void => {
        navigation && navigation.navigate('study');
      };

    const onPastQuestionPress = (): void => {
        navigation && navigation.navigate('SelectSchool');
      }; 
      
    const onTutorPress = (): void => {
        navigation && navigation.navigate('study');
      };
      
    const onProgressPress = (): void => {
        navigation && navigation.navigate('study');
      };
      
    const onLeaderBoardPress = (): void => {
        navigation && navigation.navigate('study');
      };  
      
    const onActivatePress = (): void => {
        navigation && navigation.navigate('ActivationOptions');
        
      };   

    return (

        <ImageBackground
            style={styles.homebackground}
            resizeMode="cover"
            source={require('../../../assets/images/homeplain.png')}>
             <ScrollView>
              <View style={styles.container}>
                <Text style={{alignItems:"flex-start"}}>Welcome  Adebisi</Text>
              </View>
            <View style={styles.container}>

              
                
                <View>

                       <View style={styles.layout} >
                          <Card style={[styles.shortCard1]} onPress={() => onStudyPress()}  >
                            <Image resizeMode="contain" style={{ width: 70, height: 70,alignSelf:'center',marginTop:wp('-1%') }} source={require('../../../assets/images/studying.png')} />    
                            <Text style={{color:'#fff',alignSelf:'center',marginTop:wp('2%')}}>
                                Study
                            </Text>
                          </Card>   
                       </View>
                    

                    <View style={styles.layout} >
                      <Card style={[styles.shortCard3]}  onPress={() => onTutorPress()}  >
                        
                        <Image resizeMode="contain" style={{ width: 70, height: 70,alignSelf:'center',marginTop:wp('-1%') }} source={require('../../../assets/images/teacher.png')} />    
                        <Text style={{color:'#fff',alignSelf:'center',marginTop:wp('2%')}}>
                        Book a tutor
                        </Text>
                      </Card>
                    </View> 
                </View> 
                <Divider/>

                <View>
                    <View style={styles.layout} >
                    <Card style={[styles.shortCard2]}   onPress={() => onPastQuestionPress()}  >
                        
                        <Image resizeMode="contain" style={{ width: 70, height: 70,alignSelf:'center',marginTop:wp('-1%') }} source={require('../../../assets/images/quiz.png')} />    
                        <Text style={{color:'#fff',alignSelf:'center',marginTop:wp('2%')}}>
                        Past Question
                        </Text>
                       
                      </Card>
                    </View>

                    <View style={styles.layout} >
                    <Card style={[styles.shortCard4]}   onPress={() => onProgressPress()}  >

                        <Image resizeMode="contain" style={{ width: 70, height: 70,alignSelf:'center',marginTop:wp('-1%') }} source={require('../../../assets/images/growthchart.png')} />    
                        <Text style={{color:'#fff',alignSelf:'center',marginTop:wp('2%')}}>
                          Progress
                        </Text>

                      </Card>
                    </View> 
                </View> 
            </View>
           
            <View style={styles.longContainer}>

                <View style={styles.longLayout} >                
                 <Card style={[styles.longCard1]}   onPress={() => onLeaderBoardPress()}>
                    <Text style={{color:'#fff',alignSelf:'flex-start',marginTop:wp('6%')}}>
                      Leader Board
                    </Text>
                    <Image resizeMode="contain" style={{ width: 70, height: 70,alignSelf:'flex-end',marginTop:-wp('12%') }} source={require('../../../assets/images/leaderboard.png')} />
                 </Card>
                </View>

                <View style={styles.longLayout} >
                <Card style={[styles.longCard2]}  onPress={() => onActivatePress()} >
                    <Text style={{color:'#fff',alignSelf:'flex-start',marginTop:wp('6%')}}>
                      Activate 
                    </Text>
                    <Image resizeMode="contain" style={{ width: 70, height: 70,alignSelf:'flex-end',marginTop:-wp('12%') }} source={require('../../../assets/images/activate.png')} />
                 </Card>
                </View>

            </View>
          </ScrollView> 
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
    }, 
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 24,
        paddingHorizontal: 16,
      },
    longContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 24,
        paddingHorizontal: 16,
        
      },
      layout: {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'center',
        height:(17.4/100)*Dimensions.get('window').height,
        width:(43/100)*Dimensions.get('window').width
      },
      longLayout: {
        flex: 1,        
        height:(12.7/100)*Dimensions.get('window').height,
        width:(87/100)*Dimensions.get('window').width,
        marginTop:15
      },
      longCard1:{
        flex:1,
        justifyContent:'space-between',
        maxHeight:(12.7/100)*Dimensions.get('window').height,
        minWidth:(87/100)*Dimensions.get('window').width,
        borderRadius:10,
        backgroundColor:'#4EAFC4',
        marginTop:-15
      },
      longCard2:{
        flex:1,
        justifyContent:'space-between',
        maxHeight:(12.7/100)*Dimensions.get('window').height,
        minWidth:(87/100)*Dimensions.get('window').width,
        borderRadius:10,
        backgroundColor:'#A5A0F5',
        marginTop:5
      },
      shortCard1:{
        height:(17.4/100)*Dimensions.get('window').height,
        width:(40/100)*Dimensions.get('window').width,
        borderRadius:10,
        backgroundColor:'#56BCF4',
        marginRight:8
      },
      shortCard2:{
        height:(17.4/100)*Dimensions.get('window').height,
        width:(40/100)*Dimensions.get('window').width,
        borderRadius:10,
        backgroundColor:'#A5A0F5'
      },
      shortCard3:{
        height:(17.4/100)*Dimensions.get('window').height,
        width:(40/100)*Dimensions.get('window').width,
        borderRadius:10,
        backgroundColor:'#F6A9A9',
        marginRight:8,
        marginTop:12
      },
      shortCard4:{
        height:(17.4/100)*Dimensions.get('window').height,
        width:(40/100)*Dimensions.get('window').width,
        borderRadius:10,
        backgroundColor:'#FCB557',
        marginTop:12
      }
});
