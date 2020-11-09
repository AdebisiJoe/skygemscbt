import React from 'react'
import OnBoardingScreen from '../onBoarding/OnBoardingScreen';
import LoginScreen from '../Login/LoginScreen';
import Signup from '../Signup/signup';
import HomeScreen from '../Home/HomeScreen';
import Quiz from '../Quiz/Quiz';
import Quiz2 from '../Quiz/Quiz2';
import MutipleQuiz from '../Quiz/MutipleQuiz';
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import SelectSchool from '../SelectSchool/SelectSchool';
import SelectSubjects from '../SelectSubjects/SelectSubjects';
import ActivationOptions from '../Activation/ActivationOptions';
import Icon from 'react-native-vector-icons/Ionicons';
import { ImageBackground, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Divider, Drawer, DrawerItem,Avatar } from '@ui-kitten/components';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';



//const Drawer = createDrawerNavigator();

const { Navigator,Screen  } = createDrawerNavigator();

  const HomeIcon = (props) => (
  <Avatar shape='square' style={{alignSelf:'flex-start', }} source={require(`../../../assets/images/homeicon.png`)} />
  );

  const HelpIcon = (props) => (
    <Avatar shape='square' style={{alignSelf:'flex-start', }} source={require(`../../../assets/images/customer-service.png`)} />
  );
   const SubcribeIcon = (props) => (
    <Avatar shape='square' style={{alignSelf:'flex-start', }} source={require(`../../../assets/images/credit-card.png`)} />
  );
  const ProgressIcon = (props) => (
    <Avatar shape='square' style={{alignSelf:'flex-start', }} source={require(`../../../assets/images/graph.png`)} />
  );
  const TandCIcon = (props) => (
    <Avatar shape='square' style={{alignSelf:'flex-start', }} source={require(`../../../assets/images/document.png`)} />
  );
  const LogoutIcon = (props) => (
    <Avatar shape='square' style={{alignSelf:'flex-start', }} source={require(`../../../assets/images/logout.png`)} />
  );
  const BellIcon = (props) => (
    <Avatar shape='square' style={{alignSelf:'flex-start', }} source={require(`../../../assets/images/creditcard.png`)} />
 );

const ForwardIcon = (props) => (
  <Icon {...props} name='ios-arrow-forward'/>
);

const Header = (props) => (
  <React.Fragment>
    <ImageBackground
      style={[props.style, styles.header]}
      source={require('../../../assets/rankimages/1.png')}
    />
    <Divider/>
  </React.Fragment>
);



const DrawerContent = ({ navigation}) => {

  const [selectedIndex, setSelectedIndex] = React.useState(null); 
  
  return(
 
  <Drawer
  header={Header}
  selectedIndex={selectedIndex}
  onSelect={index => setSelectedIndex(index)}>
  <DrawerItem
    title='Home'
    accessoryLeft={HomeIcon}
    accessoryRight={ForwardIcon}
    onPress={()=> navigation.navigate('Home')} 
  />
  <DrawerItem
    title='Help desk'
    accessoryLeft={HelpIcon}
    accessoryRight={ForwardIcon}
    onPress={()=> navigation.navigate('ActivationOptions')} 
  />
  <DrawerItem
    title='Subscribe'
    accessoryLeft={SubcribeIcon}
    accessoryRight={ForwardIcon}
    onPress={()=> navigation.navigate('ActivationOptions')} 
  />
  <DrawerItem
    title='Progress'
    accessoryLeft={ProgressIcon}
    accessoryRight={ForwardIcon}
    onPress={()=> navigation.navigate('ActivationOptions')} 
  />
  <DrawerItem
    title='Terms and Condition'
    accessoryLeft={TandCIcon}
    accessoryRight={ForwardIcon}
    onPress={()=> navigation.navigate('LeaderBoard')} 
  />
    <DrawerItem
    title='Log out'
    accessoryLeft={LogoutIcon}
    accessoryRight={ForwardIcon}
    onPress={()=> navigation.navigate('ActivationOptions')} 
  />
</Drawer>
)

};


export default function SideBarNavigator() {

  

    return (

    <Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Screen name='Progress' component={AppNavigator}/>
    </Navigator>


    )
}

const styles = StyleSheet.create({
  header: {
    height: 128,
    flexDirection: 'row',
    alignItems: 'center',
  },
});