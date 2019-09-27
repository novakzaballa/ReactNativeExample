/**
 * CodeChallenge React Native App
 * Login Screen
 * @flow
 * @format
 */
"use strict";

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

class Login extends React.Component {
    render(){
        return (
            <View style = {styles.container}>
                <View style = {styles.TopFrame}/>
                <View style = {styles.logoFrame}>
                    <Image 
                        // style= {styles.logo} 
                        source = {require('../../assets/images/logo.png')}
                    />
                </View>
                <View style = {styles.formFrame}>
                    <TextInput keyboardType = 'email-address' style = {styles.input} placeholder='Email' />
                    <TextInput secureTextEntry={true} style = {styles.input} placeholder='Password' />
                    <Text style = {styles.normalText}>Forgot 
                        <Text onPress={() => {alert('Forgot email: TODO');}} 
                            style = {styles.link}> Email</Text>
                        <Text style = {styles.normalText}> Or </Text>
                        <Text onPress={() => {alert('Forgot password: TODO');}} 
                            style = {styles.link}>Password?</Text>
                    </Text>
                </View>
                <View style = {styles.botFrame}>
                    <TouchableOpacity onPress={() => {alert('Submit: TODO');}} 
                        style = {styles.buttonStyle}>
                        <Text style = {styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                    <Text style = {styles.textSignUp}>Don’t have an account? 
                        <Text onPress={() => {alert('Sign Up: TODO');}} 
                            style = {styles.link}>Sign Up</Text>
                    </Text>
                </View>
            </View>
      );    
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : "column",
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    TopFrame: {
        flex: 67 //167
    },
    logoFrame: {
        flex: 407, //107
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        height: '13%',
    },
    formFrame: {
        flex: 238,
        justifyContent: 'space-evenly',
        width: '76%',
        flexWrap: 'nowrap'
    },
    botFrame: {
        flex: 300,
        justifyContent: 'center',
        width: '76%',
        alignContent: 'center',
        alignItems: 'center'

    },
    input: {
        paddingTop: 5,
        backgroundColor: '#f6f7fb',
        width: '100%'
    },
    buttonStyle: {
        backgroundColor:'#31C5C3',
        width: '100%',
        padding: 15,
        borderRadius:20,
        alignItems: 'center',
        color: '#ffffff' 
    },
    link: {
        color:'#31C5C3'
    },
    buttonText:{
        fontFamily: 'Gotham Rounded',
        color:'#ffffff',
        textAlign:'center'
    },
    normalText:{
        paddingTop: 5,
        marginTop: 5,
        fontFamily: 'Gotham Rounded',
        color:'#898989'
    },
    textSignUp:{
        marginTop: 10,
        fontFamily: 'Gotham Rounded',
        color:'#898989'
    }
});
export default Login;
