import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Touchable,
  TouchableOpacity
} from 'react-native';

import bgImage from './assets/background.jpg'
import logo from './assets/vd-logowhite.png'
import Icon from 'react-native-vector-icons/Ionicons'
import Navigator from './Routes/loginStack'

import { NavigationContainer } from '@react-navigation/native';
import { Drawer } from 'react-native-paper';

import TabNavigator from './screens/Navigator';

const { width: WIDTH } = Dimensions.get('window')

export default function App() {
  return (
   <Navigator/>
  );
}



