import React from 'react';
import { Card, Text } from '@ui-kitten/components';
import { View,ScrollView,StyleSheet,ImageBackground} from 'react-native';




export default function Progress() {
    return (
        <ImageBackground
        style={styles.homebackground}
        resizeMode="cover"
        source={require('../../../assets/images/homeplain.png')}> 
        <ScrollView>
            <View style={{flex:1}}>
                <Text>progress Here</Text>
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
    }
});