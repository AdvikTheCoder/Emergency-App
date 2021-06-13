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

export default class MainScreen extends Component{
  render(){
   return(
     <SafeAreaProvider>
     <View style={{backgroundColor:'#FF7F7F',height:570}}>
<AppHeader backgroundColor="black" title='MainScreen'/>

<TouchableOpacity style={{ width:300,height:50,justifyContent:'center', alignSelf:'Center',alignItems:'center', borderRadius:25,backgroundColor:"white",shadowColor: "yellow", marginTop:40,shadowOffset: {  width: 0, height: 8,}}} onPress={()=>(this.props.navigation.navigate('HomeScreen'))}><Text>Go To HomeScreen</Text></TouchableOpacity>

<TouchableOpacity style={{ width:300,height:50,justifyContent:'center', alignSelf:'Center',alignItems:'center', borderRadius:25,backgroundColor:"white",shadowColor: "yellow", marginTop:40,shadowOffset: {  width: 0, height: 8,}}} onPress={()=>(this.props.navigation.navigate('EmergencyScreen'))}><Text>Emergency Now</Text></TouchableOpacity>

<TouchableOpacity style={{ width:300,height:50,justifyContent:'center', alignSelf:'Center',alignItems:'center', borderRadius:25,backgroundColor:"white",shadowColor: "yellow", marginTop:40,shadowOffset: {  width: 0, height: 8,}}} onPress={()=>(this.props.navigation.navigate('InfoScreen'))}><Text>Add Your Contacts</Text></TouchableOpacity>
     </View>
     </SafeAreaProvider>
   ) 
  }
}