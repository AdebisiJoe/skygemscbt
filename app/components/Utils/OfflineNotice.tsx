import React,{useEffect} from "react";
import { View, StyleSheet,Platform } from "react-native";
import Constants from "expo-constants";

import { useNetInfo }from '@react-native-community/netinfo';
//import NetInfo  from '@react-native-community/netinfo';
import NetInfo from 'react-native-web/dist/exports/NetInfo';
import { Text } from '@ui-kitten/components';



function OfflineNotice(props) {
  const netInfo = useNetInfo();

  const [networkType, setNetworkType] = React.useState("");
  const [isInternetReachable, setIsInternetReachable] = React.useState(false);


  useEffect(()=>{

    if(Platform.OS=='web'){

    }if(Platform.OS=='android'){
  
      //const unsubscribe = netInfo.addEventListener(state => {
      //   console.log("Connection type", state.type);
        console.log("Is connected?", netInfo.isConnected);
        setIsInternetReachable(netInfo.isInternetReachable);
        setNetworkType(netInfo.type)
        
     // });
    }
    // netInfo.fetch().then(state => {
    //   setIsInternetReachable(state.isInternetReachable);
    //   setNetworkType(state.type)
      
    // });


     
   
  },[networkType,isInternetReachable])


  

  if (networkType !== "unknown" && isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
        
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor:'#fc5c65',
    height: 50,
    justifyContent: "center",
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
  },
  text: {
    color:'#ffffff',
  },
});

export default OfflineNotice;
