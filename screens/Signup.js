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

import bgImage from '../assets/background.jpg'
import logo from '../assets/vd-logowhite.png'
import Icon from 'react-native-vector-icons/Ionicons'


const { width: WIDTH } = Dimensions.get('window')

export default class Signup extends Component {
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({
        showPass: false,
        press: true
      })
    }
    else {
      this.setState({
        showPass: true,
        press: false
      })
    }
  }
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          {/* <Text style={styles.LogoText}> LOGIN </Text> */}
        </View>

        <View style={styles.inputContainer}>
          
          <TextInput
            style={styles.input}
            placeholder={'First Name'} 
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
        </View>

        <View style={styles.inputContainer}>
         
          <TextInput
            style={styles.input}
            placeholder={'Last Name'} 
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
          </View>
          <View style={styles.inputContainer}>
         
          <TextInput
            style={styles.input}
            placeholder={'Username'} 
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
          </View>

      <View style={styles.inputContainer}>
          
          <TextInput
            style={styles.input}
            placeholder={'Email'} 
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
          </View>

      <View style={styles.inputContainer}>
          
          <TextInput
            style={styles.input}
            placeholder={'Password'} 
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
          </View>

      <View style={styles.inputContainer}>
          
          <TextInput
            style={styles.input}
            placeholder={'Re-enter Password'} 
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
          </View>


{/* 
          <TouchableOpacity style={styles.btnEye}
            onPress = {this.showPass.bind(this)}>
            <Icon name={this.state.press == false ? 'ios-eye-outline' : 'ios-eye-off-outline'}
              size={26} color={'rgba(255,255,255,0.7)'} />
          </TouchableOpacity> */}

          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.text}>Signup</Text>
          </TouchableOpacity>

        

      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
    
  },

  logo: {
    width: 120,
    height: 120,
    //paddingBottom:100
    //translateY:-40
    
  },

  LogoText: {
    color: 'white',
    fontSize: 35,
    fontWeight: '500',
    //marginTop: 10,
    opacity: 0.7
  },

  inputContainer: {
    marginTop: 10,

  },

  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25
  },

  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 43
  },

  btnEye: {
    position: 'absolute',
    top: 8,
    right: 43
  },

  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#60114B',
    justifyContent: 'center',
    margin: 20
  },

  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    //fontWeight: '900',
    textAlign: 'center'
  }


});

