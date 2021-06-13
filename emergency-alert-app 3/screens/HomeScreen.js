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
    ScrollView,
    Image} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import AppHeader from '../components/AppHeader'
import db from '../config';
import firebase from 'firebase';

export default class HomeScreen extends Component{
  render(){
    return(
      <SafeAreaProvider>
      <View style={{backgroundColor:'#FF7F7F',height:555}}>
       <AppHeader backgroundColor='black'title='HOMESCREEN '/>
<TouchableOpacity style={{ width:300,height:50,justifyContent:'center', alignSelf:'Center',alignItems:'center', borderRadius:25,backgroundColor:"white",shadowColor: "yellow", marginTop:10,shadowOffset: {  width: 0, height: 8,}}}><Text>EMERGENCY NOW</Text></TouchableOpacity>

<Image source={require('../assets/bogo.png')} style={{width:200,height:170,alignSelf:'center',marginTop:80}}/>

<TouchableOpacity style={{ width:300,height:50,justifyContent:'center', alignSelf:'Center',alignItems:'center', borderRadius:25,backgroundColor:"white",shadowColor: "yellow", marginTop:40,shadowOffset: {  width: 0, height: 8,}}} onPress={()=>(this.props.navigation.navigate('WelcomeScreen'))}><Text>LOG OUT</Text></TouchableOpacity>


      </View>
            </SafeAreaProvider>
    )
  }
}