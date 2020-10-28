import React from 'react'
import { StyleSheet, View, ImageBackground,Dimensions,Image,TouchableWithoutFeedback} from 'react-native';
import { Input,Button } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import usersApi from "../../api/users";
import auth from '../../api/auth';
import useAuth from '../../auth/useAuth';



export default function Signup({ navigation }:any)  {
  const authUser = useAuth();
  const [name, setName] = React.useState<string>();  
  const [email, setEmail] = React.useState<string>();
  const [phone, setPhone] = React.useState<string>();
  const [username, setUsername] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordconfirmation, setPasswordConfirmation] = React.useState<string>();

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props:any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon  name={secureTextEntry ? 'eye-slash' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  const onSignInButtonPress = (): void => {
    // navigation && navigation.goBack();
    navigation && navigation.navigate('Login');
  };

  const onSignUpButtonPress =async() => {
    
    const userInfo ={ 
      "name" : name,
      "email": email,
      "phone": phone,
      "username": username,
      "password": password,
      "password_confirmation": passwordconfirmation
    }
   
    console.log(userInfo);
   const result=await usersApi.register(userInfo);
   if (!result.ok){
    alert('could not sign you up');
    return;
  }else{
    const result = await auth.login(phone, password);
    if (!result.ok){
      alert('Authentication Failed')
      return;
    }
    authUser.logIn(result.data.access_token)
    console.log(result.data.access_token);
  }


   // navigation && navigation.navigate('Home');
  };

  
  

    return (
   
      <ImageBackground

        style={styles.signupbackground}
        resizeMode="cover"
        source={require('../../../assets/images/signupbackground.png')}>
      <ScrollView style={styles.container}> 

        <View style={styles.logoContainer}>
         <Image style={{marginBottom:5, width:100, height:100 }} source={require('../../../assets/images/skygatelogo.png')} />
       </View> 
        <View style={styles.formContainer}>
          <Input
            label='Name'
            size='small'
            placeholder='name'          
            status='warning'
            value={name}
            onChangeText={setName}
          />
          <Input
            label='EMAIL'
            size='small'
            placeholder='Email'          
            status='warning'
            value={email}
            onChangeText={setEmail}
          />
            <Input
            label='PHONE NUMBER'
            size='small'
            placeholder='Phone Number'          
            status='warning'
            value={phone}
            onChangeText={setPhone}
          />
            <Input
            label='USERNAME'
            size='small'
            placeholder='Username'          
            status='warning'
            value={username}
            onChangeText={setUsername}
          />
          <Input
            style={styles.passwordInput}
            size='small'
            placeholder='Password'
            label='PASSWORD'
            status='warning'
            value={password}
            accessoryRight={renderIcon}
            
            secureTextEntry={secureTextEntry}
            onChangeText={setPassword}
          />
          <Input
            style={styles.passwordInput}
            size='small'
            placeholder='Confirm Password'
            label='CONFIRM PASSWORD'
            status='warning'
            value={passwordconfirmation}
            accessoryRight={renderIcon}
            
            secureTextEntry={secureTextEntry}
            onChangeText={setPasswordConfirmation}
          />
        </View>
        <Button
          style={{paddingTop:20}}
          status='warning'
          size='small'
          onPress={onSignUpButtonPress}>
          SIGN UP
        </Button>
        <View style={styles.socialAuthContainer}>

          <Button
            style={styles.socialAuthHintText}
            appearance='ghost' 
            status='warning' 
            onPress={onSignInButtonPress}

          >

            Have an account? Click here to Login.

          </Button>
          
          <View style={styles.socialAuthButtonsContainer}>
           
           
          
          </View>
        </View>
        
    </ScrollView>
    </ImageBackground>
        
    )
}



const styles = StyleSheet.create({
  signupbackground:{
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







