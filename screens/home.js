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

export default class Home extends Component {
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
    }
});