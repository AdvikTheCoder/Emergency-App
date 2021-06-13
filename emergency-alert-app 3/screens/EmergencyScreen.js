	import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import AppHeader from '../components/AppHeader'
import db from '../config';
import firebase from 'firebase';

export default class EmergencyScreen extends Component{
 render(){
   return(
     <SafeAreaProvider>
     <View style={{backgroundColor:'black'}}>
     <TouchableOpacity style={{ width:300,height:300,justifyContent:'center', alignSelf:'Center',alignItems:'center', borderRadius:105,backgroundColor:"red",shadowColor: "white", marginTop:10,shadowOffset: {  width: 0, height: 8,}}}><Text>EMERGENCY NOW</Text></TouchableOpacity>

          <TouchableOpacity style={{ width:300,height:50,justifyContent:'center', alignSelf:'Center',alignItems:'center', borderRadius:25,backgroundColor:"white",shadowColor: "yellow", marginTop:80,shadowOffset: {  width: 0, height: 8,}}} onPress={()=>(this.props.navigation.navigate('MainScreen'))}><Text>Go To MainScreen</Text></TouchableOpacity>
     </View>
     </SafeAreaProvider>
   )
 } 
}