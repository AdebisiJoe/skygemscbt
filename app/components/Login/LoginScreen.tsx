import React from 'react'
import { StyleSheet, View, ImageBackground,Dimensions,Image,TouchableWithoutFeedback} from 'react-native';
import { ApplicationProvider, Layout, Text,Input,Button } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import auth from '../../api/auth';
import useAuth from '../../auth/useAuth';





export default function Login({ navigation }:any)  {
  const authUser = useAuth();
  const [phonenumber, setPhoneNumber] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props:any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon  name={secureTextEntry ? 'eye-slash' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  const onSignInButtonPress = async() => {
    if (!phonenumber) {
      alert('Please fill phonumber');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }
    var dataToSend = { 'phone':phonenumber,'password': password };

    console.log(dataToSend)
    const result = await auth.login(phonenumber, password);
    if (!result.ok){
      alert('Authentication Failed')
      return;
    }
    authUser.logIn(result.data.access_token)
    console.log(result.data.access_token);
    //navigation && navigation.navigate('Home');
  };

  const onSignUpButtonPress = (): void => {
    navigation && navigation.navigate('Register');
  };

  
  

    return (
   
      <ImageBackground

        style={styles.signinbackground}
        resizeMode="cover"
        source={require('../../../assets/images/signinbackground.png')}>
      <View style={styles.container}> 

        <View style={styles.logoContainer}>
         <Image style={{marginBottom:5, width:100, height:100 }} source={require('../../../assets/images/skygatelogo.png')} />
       </View> 
        <View style={styles.formContainer}>
          <Input
            label='PHONE NUMBER'
            placeholder='Phone Number'          
            status='warning'
            value={phonenumber}
            onChangeText={setPhoneNumber}
          />
          <Input
            style={styles.passwordInput}
            placeholder='Password'
            label='PASSWORD'
            status='warning'
            value={password}
            accessoryRight={renderIcon}
            
            secureTextEntry={secureTextEntry}
            onChangeText={setPassword}
          />
        </View>
        <Button
          status='warning'
          size='large'
          onPress={onSignInButtonPress}>
          SIGN IN
        </Button>
        <View style={styles.socialAuthContainer}>

          <Button
            style={styles.socialAuthHintText}
            appearance='ghost' 
            status='warning' 
            onPress={onSignUpButtonPress}

          >

            Don't have an account? Click here to register.

          </Button>
          
          <View style={styles.socialAuthButtonsContainer}>
           
           
          
          </View>
        </View>
        
    </View>
    </ImageBackground>
        
    )
}



const styles = StyleSheet.create({
  signinbackground:{
   height:Dimensions.get('window').height,
   width:Dimensions.get('window').width
  },
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },

  socialAuthContainer: {
    marginTop: 48,
  },
  evaButton: {
    maxWidth: 72,
    paddingHorizontal: 0,
  },
  formContainer: {
    flex: 1,
    marginTop: 48,
  },
  passwordInput: {
    marginTop: 16,
  },
  signInLabel: {
    flex: 1,
  },
  signUpButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
  socialAuthButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialAuthHintText: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  logoContainer:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
});







