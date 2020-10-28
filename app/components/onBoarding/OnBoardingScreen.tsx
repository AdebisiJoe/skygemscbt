import React from 'react'
import { StyleSheet, View,Image,Button,Text, } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
const slides = [
  {
    key: 'one',
    title: '',
    text: 'Take online test of learnt topics and past questions,see progress report and earn Badges.',
    image: require('../../../assets/images/onlineassessment.png'),
    backgroundColor: '#00003F',
  },
  {
    key: 'two',
    title: '',
    text: 'Book a Tutor for personalised one on one Training.',
    image: require('../../../assets/images/booktutor.png'),
    backgroundColor: '#00003F',
  },
  {
    key: 'three',
    title: '',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../../assets/images/booktutor.png'),
    backgroundColor: '#00003F',
  }
];

interface State {
  showRealApp:boolean
  loading:boolean
  
}
interface Props {
 navigation:any
}



const styles = StyleSheet.create({
  slide: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00003F',
    
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});

type Item = typeof slides[0];

 class OnBoardingScreen extends React.Component<Props,State> {


  constructor(props:Props) {
    super(props);
    this.state = {
      showRealApp: false,
      loading: true,
      //To show the main page of the app
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('first_time').then((value) => {
      this.setState({ showRealApp: !!value, loading: false });
    });
  }

  
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true });
    AsyncStorage.setItem('first_time', 'true').then(() => {
      this.setState({ showRealApp: true });
        this.props.navigation.navigate('Login');
    });
  }

  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    AsyncStorage.setItem('first_time', 'true').then(() => {
      this.setState({ showRealApp: true });
        this.props.navigation.navigate('Home');
    });
  };

 _renderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.backgroundColor,
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _keyExtractor = (item: Item) => item.title;

  render() {
    return (
     
        
         
         <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          data={slides}

          onDone={this._onDone}
          //Handler for the done On last slide
          showSkipButton={true}
          onSkip={this._onSkip}
         />
       
        
     
    );
  }
}




export default OnBoardingScreen;





