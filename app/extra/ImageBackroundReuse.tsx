import React from 'react'
import { StyleSheet, View, ImageBackground,Dimensions,Image,TouchableWithoutFeedback} from 'react-native';
import { ApplicationProvider, Layout, Text,Input,Button } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ImageBackroundReuse({props}:any) {
    return (
        <ImageBackground
        style={styles.background}
        resizeMode="contain"
        source={props.image}>


        </ImageBackground>
    )
}

const styles = StyleSheet.create({
     background:{
     height:Dimensions.get('window').height,
     width:Dimensions.get('window').width
    },

});
