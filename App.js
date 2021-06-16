import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FacebookScreen from './Screens/FacebookScreen'
import InstagramScreen from './Screens/InstagramScreen' 

export default class App extends Component{
render(){
  return(
    <AppContainer/>
  )
}
}

const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:FacebookScreen},
  Search:{screen:InstagramScreen}
})

const AppContainer = createAppContainer(TabNavigator)
