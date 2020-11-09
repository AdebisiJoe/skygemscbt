import React from 'react';
import { View,Text,StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function SideBarNavigator({navigation}) {
    return (
      <View>
          <SafeAreaView style={{ flex:1 }}>
              <TouchableOpacity 
                  style={{alignItems:'flex-end',margin:10}}
                  onPress={navigation.openDrawer}
              >
                  <Icon  name='bars' size={24} color='#161924'/>
              </TouchableOpacity>
          </SafeAreaView>
      </View>
    )
}
