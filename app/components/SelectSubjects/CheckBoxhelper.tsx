import React from 'react';
import { StyleSheet, View, ImageBackground,Dimensions,Image} from 'react-native';
import { schoolsubjects } from './schoolsubjects';
import { ApplicationProvider, Layout, Text,Input,Button,Card,
    TopNavigation, TopNavigationAction,Radio,CheckBox } from '@ui-kitten/components';

    
    export default function CheckBoxhelper(props) {

        const [testSubjects, setTestSubjects] = React.useState([]);


        const setSubjects= (subject) => {

            let checked = checkSubjects(testSubjects,subject);
               console.log("here to see"+checked);
               console.log(testSubjects);
            if (checked==false) {
                // add schoolId to user.schools
                setTestSubjects([...testSubjects,subject]);
                
            } else {
                // remove schoolId from user.schools
       
                setTestSubjects(testSubjects.filter(item => item !== subject));
    
            }
        }

        const checkSubjects=(subjects:string[] = [],subject:string)=>{
               {console.log(subjects)}
            if(typeof subjects.includes == 'undefined'){
                var arrLength = subjects.length;
                for (var i = 0; i < arrLength; i++) {
                    if (subjects[i] == subject) {
                        return true;
                    }
                }
                return false;
            }
            return subjects.includes(subject);
        }

        const isChecked = checkSubjects(testSubjects,props.subject);
        
        return (
            
        <View>

            <CheckBox  checked={isChecked} onChange={()=>setSubjects(props.subject)} >
                     {props.subject}         
            </CheckBox>

        </View>

        )
    }
    