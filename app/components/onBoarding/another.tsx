// import React from 'react'
// import { StyleSheet, View,Image,Button,Text,TouchableOpacity } from 'react-native';
// import Onboarding from 'react-native-onboarding-swiper';

// import AppIntroSlider from 'react-native-app-intro-slider';
// import Icon from 'react-native-vector-icons/Ionicons';




// const Skip=({...props})=>(
//    <Button 
//        title='skip'
//        color="#00003F"
//        {...props}
//     />   
// );

// const Next=({...props})=>(
//   <Button 
//       title='next'
//       color="#00003F"
//       {...props}
//    />   
// );

// const Done=({...props})=>(
//   <TouchableOpacity 
//   style={{marginHorizontal:8}}
//   {...props}
//   >
//     <Text style={{fontSize:16}}>Done</Text>
//   </TouchableOpacity>   
// );

// const Dots=({selected}:any)=>{
//   let backgroundColor;

//   backgroundColor=selected ? 'rgb(255,98,0)': 'rgb(255,255,255)';

//   return (
//     <View 
//        style={{
//          width:5,
//          height:5,
//          marginHorizontal:3,
//          backgroundColor
//        }}
//     />
//   )
// };

// const OnBoardingScreen = ({navigation}:any): React.ReactElement => {
//     return (
//         <Onboarding
//         SkipButtonComponent={Skip}
//         NextButtonComponent={Next}
//         DoneButtonComponent={Done}
//         DotComponent={Dots}
//         onSkip={()=>navigation.replace("Login")}
//         onDone={()=>navigation.navigate("Login")}
//         containerStyles={{
//           justifyContent: "center",
//           alignItems: "center",
//           flex:1,
//           // flexDirection: 'column',
          
//         }}
//         // imageContainerStyles={{
//         //   paddingBottom: 0, 
//         //   flex: 1, 
//         //   justifyContent: 'center',
//         // }}
//         pages={[
         
//           {
//             backgroundColor: '#00003F',
//             image: <Image resizeMode="contain" style={{marginTop:100, width: 350, height: 200 }}  source={require('../../../assets/images/onlineassessment.png')} />,
//             title: <Text style={{marginTop:250,color:'#fff',height: '6%'}}>Book a  Tutor</Text>,
//             subtitle:<Text style={{textAlign:'center',marginTop:'-50',color:'#fff',height: '10%'}}>Book a Tutor for personalised one on one 
//             Training</Text>,
            
//           },
//           {
//             backgroundColor: '#00003F',
//             image: <Image resizeMode="contain" style={{marginTop:100, width: 300, height: 200 }} source={require('../../../assets/images/videolesson.png')} />,
//             title: <Text style={{marginTop:250,color:'#fff',height: '6%'}}>Book a  Tutor</Text>,
//             subtitle:<Text style={{textAlign:'center',marginTop:'-50',color:'#fff',height: '10%'}}>Book a Tutor for personalised one on one 
//             Training</Text>,
//           },
//           {
//             backgroundColor: '#00003F',
//             image: <Image resizeMode="contain" style={{marginTop:100, width: 300, height: 200 }} source={require('../../../assets/images/booktutor.png')} />,
//             title: <Text style={{marginTop:250,color:'#fff',height: '6%'}}>Book a  Tutor</Text>,
//             subtitle:<Text style={{textAlign:'center',marginTop:'-50',color:'#fff',height: '10%'}}>Book a Tutor for personalised one on one 
//             Training</Text>,
//           }
         
//         ]}
//       />
//     );
// }

// export default OnBoardingScreen;

// // const styles=StyleSheet.create({
// //   container:{
// //     flex:1,
// //     alignItems:'center',
// //     justifyContent:'center'
// //   }
// // });



