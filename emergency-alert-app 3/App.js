import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen';
import InfoScreen from './screens/InfoScreen';
import HomeScreen from './screens/HomeScreen'
import MainScreen from './screens/MainScreen'
import EmergencyScreen from './screens/EmergencyScreen'
export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  InfoScreen:{screen:InfoScreen},
 HomeScreen:{screen:HomeScreen},
EmergencyScreen:{screen:EmergencyScreen},
MainScreen:{screen:MainScreen}
})


const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

