import React from 'react';
import { Card, Text } from '@ui-kitten/components';
import { View,ScrollView,ImageBackground,StyleSheet} from 'react-native';




export default function HelpDesk() {
    return (

        <ImageBackground
        style={styles.homebackground}
        resizeMode="cover"
        source={require('../../../assets/images/homeplain.png')}> 
        <ScrollView>
            <View style={{flex:1}}>
                <Text>help desk here</Text>
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
