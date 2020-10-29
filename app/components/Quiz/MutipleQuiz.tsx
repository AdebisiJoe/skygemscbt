import React,{useRef, Fragment,useState,useEffect} from 'react'
import { StyleSheet, ImageBackground,Dimensions,Image,View,ScrollView} from 'react-native';
import QuizContainer from './QuizContainer';
// import { ScrollView } from 'react-native-gesture-handler';
import Animated,  { multiply} from 'react-native-reanimated';
import QuestionSlide from './QuestionSlide';
import { questions } from './data';
import  {useScrollHandler}  from 'react-native-redash/lib/module/v1';
import { Button,ButtonGroup , Layout, Tab, TabView, Text} from '@ui-kitten/components';

const {height,width}=Dimensions.get('window');



export default function MutipleQuiz(props) {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    return (

        <View>
           <TabView
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}>
            <Tab title='USERS'>
                <Layout style={styles.tabContainer}>
                <Text category='h5'>USERS</Text>
                </Layout>
            </Tab>
            <Tab title='ORDERS'>
                <Layout style={styles.tabContainer}>
                <Text category='h5'>ORDERS</Text>
                </Layout>
            </Tab>
            <Tab title='TRANSACTIONS'>
                <Layout style={styles.tabContainer}>
                <Text category='h5'>TRANSACTIONS</Text>
                </Layout>
            </Tab>
            </TabView>
        </View>

    )
}

const styles = StyleSheet.create({
    tabContainer: {
      height: 64,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

