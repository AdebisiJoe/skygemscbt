import React from 'react'
import { StyleSheet, View, ImageBackground,Dimensions,Image,TouchableWithoutFeedback} from 'react-native';
import { Input,Button } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import ActivityIndicator from "../Utils/ActivityIndicator";
import usersApi from "../../api/users";
import * as Yup from "yup";
import useApi from "../../hooks/useApi";


import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../../forms";
import authApi from '../../api/auth';
import useAuth from '../../auth/useAuth';



const validationSchema = Yup.object().shape({
  phone: Yup.number().required().min(11).label("Phone Number"),
  email: Yup.string().required().email().label("Email"),
  username: Yup.string().required().min(4).label("Username"),
  name: Yup.string().required().min(4).label("Name"),
  password: Yup.string().required().min(4).label("Password"),
  password_confirmation: Yup.string().required().min(4).label("password confirmation"),
});


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
    const result = await authApi.login(phone, password);
    if (!result.ok){
      alert('Authentication Failed')
      return;
    }
    authUser.logIn(result.data.access_token)
    console.log(result.data.access_token);
  }


   // navigation && navigation.navigate('Home');
  };
  
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = React.useState("");

  const handleSubmit = async (userInfo) => {
    console.log(userInfo);
    const result = await registerApi.request(userInfo);
    console.log(result)

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.phone,
      userInfo.password
    );
    auth.logIn(authToken);
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
        <ActivityIndicator visible={registerApi.loading || loginApi.loading} />

        <Form
          initialValues={{ name: "", email: "", phone: "",username: "",password: "",password_confirmation: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >

          <FormField
          autoCapitalize="none"
          autoCorrect={false}
          size='small'
          keyboardType="default"
          label='Name'
          name="name"
          placeholder="Full Name"
          textContentType="Full Name"
          />
        
          <FormField
          autoCapitalize="none"
          autoCorrect={false}
          size='small'
          keyboardType="email-address"
          label='Email'
          name="email"
          placeholder="Email"
          textContentType="Email"
          />


          <FormField
          autoCapitalize="none"
          autoCorrect={false}
          size='small'
          keyboardType="phone-pad"
          label='Phone Number'
          name="phone"
          placeholder="Phone Number"
          textContentType="Phone Number'"
          />

         <FormField
          autoCapitalize="none"
          autoCorrect={false}
          size='small'
          keyboardType="default"
          label='Username'
          name="username"
          placeholder="Username"
          textContentType="Username"
          />

          <FormField
          style={styles.passwordInput}
          size='small'
          autoCapitalize="none"
          autoCorrect={false}
          accessoryRight={renderIcon}
          label='PASSWORD'
          name="password"
          placeholder="Password"
          secureTextEntry={secureTextEntry}
          textContentType="password"
        />

         <FormField
          style={styles.passwordInput}
          size='small'
          autoCapitalize="none"
          autoCorrect={false}
          accessoryRight={renderIcon}
          label='PASSWORD'
          name="password_confirmation"
          placeholder="confirm password"
          secureTextEntry={secureTextEntry}
          textContentType="password"
        />

        <SubmitButton style={{paddingTop:20}} status='warning' size='small' title="SIGN UP" />
        </Form>
        </View>
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







