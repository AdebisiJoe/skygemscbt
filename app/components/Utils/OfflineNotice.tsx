import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

// import * as NetInfo from '@react-native-community/netinfo';
import NetInfo from 'react-native-web/dist/exports/NetInfo';
import { Text } from '@ui-kitten/components';



function OfflineNotice(props) {
  const netInfo = NetInfo.useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
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
    color:'#fffffff',
  },
});

export default OfflineNotice;
