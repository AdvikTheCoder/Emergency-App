
import React ,{Component} from 'react'
import {Header} from 'react-native-elements'
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config'

export default class AppHeader extends Component{
  render(){
    return(

<Header backgroundColor={this.props.backgroundColor}
centerComponent={{text:this.props.title,style:{color:'red',fontSize:17,fontWeight:'bold'}}}/>
    )
  }
}
