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

export default class InfoScreen extends Component{



constructor(){
  super()
  this.state={
    Name1:'',
    Contact1:'',
    Name2:'',
    Contact2:'',
      Name3:'',
    Contact3:'',
      Name4:'',
    Contact4:'',
      Name5:'',
    Contact5:'',
    emailId:firebase.auth().currentUser.email
  }
}

addContacts(){
  db.collection('contacts').add({
    Contact1:this.state.Contact1,
    Name1 :this.state.Name1,
Name2:this.state.Name2,
    Contact2:this.state.Contact2,
Name3:this.state.Name3,
  Contact3:this.state.Contact3,
    Name4 :this.state.Name4,
  Contact4:this.state.Contact4,
      Name5 :this.state.Name5,
          Contact5:this.state.Contact5
          
  })
}



  render(){
    return(
      <SafeAreaProvider>
     <View style={{backgroundColor:'#FF7F7F',flex:1}}>
<AppHeader backgroundColor='black'title='ADD YOUR CONTACTS '/>
 

<TextInput placeholder='Name of the 1st person to contact' onChangeText={(text)=>{this.setState({Name1:text})}} style={{ width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'white',
   borderRadius:10,
   borderWidth:1,
   margin:20,
   padding:10}}></TextInput>


<TextInput placeholder='1st Contact' onChangeText={(text)=>{this.setSate({Contact1:text})}} style={{ width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'white',
   borderRadius:10,
   borderWidth:1,
   margin:20,
   padding:10}}></TextInput>


<TextInput placeholder='Name of the 2nd person to contact' onChangeText={(text)=>{this.setState({Name2:text})}} style={{ width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'white',
   borderRadius:10,
   borderWidth:1,
   margin:20,
   padding:10}}></TextInput>


<TextInput placeholder='2nd Contact' onChangeText={(text)=>{this.setState({Contact2:text})}} style={{ width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'white',
   borderRadius:10,
   borderWidth:1,
   margin:20,
   padding:10}}></TextInput>


<TextInput placeholder='Name of the 3rd person to contact' onChangeText={(text)=>{this.setState({Name3:text})}}  style={{ width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'white',
   borderRadius:10,
   borderWidth:1,
   margin:20,
   padding:10}}></TextInput>


<TextInput placeholder='3rd Contact' onChangeText={(text)=>{this.setState({Contact3:text})}} style={{ width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'white',
   borderRadius:10,
   borderWidth:1,
   margin:20,
   padding:10}}></TextInput>


<TextInput placeholder='Name of the 4th person to contact' onChangeText={(text)=>{this.setState({Name4:text})}} style={{ width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'white',
   borderRadius:10,
   borderWidth:1,
   margin:20,
   padding:10}}></TextInput>


<TextInput placeholder= '4th contact' onChangeText={(text)=>{this.setState=({Contact4:text})}} style={{ width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'white',
   borderRadius:10,
   borderWidth:1,
   margin:20,
   padding:10}}></TextInput> 


<TextInput placeholder='Name of the 5th person to contact' onChangeText={(text)=>{this.setState=({Name4:text})}} style={{ width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'white',
   borderRadius:10,
   borderWidth:1,
   margin:20,
   padding:10}}></TextInput>


<TextInput placeholder= '5th contact' onChangeText={(text)=>{this.setState({Contact5:text})}} style={{ width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'white',
   borderRadius:10,
   borderWidth:1,
   margin:20,
   padding:10}}></TextInput> 


<TouchableOpacity style={{ width:300,height:50,justifyContent:'center', alignSelf:'Center',alignItems:'center', borderRadius:25,backgroundColor:"white",shadowColor: "yellow", marginTop:10,shadowOffset: {  width: 0, height: 8,}}} onPress={() => {this.addContacts()}}><Text style={{}}>ADD</Text></TouchableOpacity>

<TouchableOpacity style={{ width:300,height:50,justifyContent:'center', alignSelf:'Center',alignItems:'center', borderRadius:25,backgroundColor:"#98FB98",shadowColor: "yellow", marginTop:20,shadowOffset: {  width: 0, height: 8,}}} ><Text style={{}} onPress={()=>{this.props.navigation.navigate('MainScreen')}}>Main SCREEN</Text></TouchableOpacity>
     </View> 
           </SafeAreaProvider>
    )
  }
}


