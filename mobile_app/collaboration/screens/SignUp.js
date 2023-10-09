import React, { useState } from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity, TextInput, SafeAreaView, Button, Alert, KeyboardAvoidingView } from 'react-native';
import { auth } from '../../firebase';

export default function CameraPage({navigation}){

     const pressHandlerSignIn = () => {
      navigation.navigate('LogIn');
    };


   // const TextInputExample = () => {
      //  const [text, onChangeText] = React.useState('Username');
     //   const [number, onChangeNumber] = React.useState('');
     const [text, onChangeText] = React.useState('');
     const [texts, onChangeTexts] = React.useState('');

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

     const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Signed up with:', user.email);
            })
            .catch(error => alert(error.message))
     }

  return (



    <ImageBackground source={require('../assets/GreenBackground.png')} style={styles.background}>

        <TouchableOpacity onPress={pressHandlerSignIn}
            style={styles.backButton}>
            <Text style={styles.text1}>BACK</Text>
        </TouchableOpacity>
        
       
        <Text style={styles.name}>Sign Up</Text>
    
        <View style={styles.body}>
            
        <SafeAreaView>
                <TextInput
                    style={styles.input}
                   // onChangeText={onChangeText}
                   onChangeText={text => setEmail(text)}
                   // value={number}
                  // value={text}
                  value={email}
                    placeholder="Email Address"
                   // keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder="Password"
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    //onChangeText={text => setPassword(text)}
                    //value={password}
                    placeholder="Confirm Password"
                    secureTextEntry
                />

            <View style={styles.buttonContainer}>      
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                    >
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
            

            <Text style={styles.subTitle}>Or</Text>

            <Text style={styles.subTitle}>facebook and gmail</Text>

            <View
                        style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1
                    }}/>

            <Text style={styles.smallText}>Already have an account?</Text>

            <TouchableOpacity 
                onPress={pressHandlerSignIn}
                style={[styles.button, styles.buttonOutline]}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            </View>

        </SafeAreaView>
            
        </View>
    
    </ImageBackground>

    
  );
};



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
        resizeMode: 'stretch',
    },
    circle: {
        width: 200, 
        height: 200,
        borderRadius: 100, 
        backgroundColor: '#D9D9D9',
        marginLeft: 110,
        marginTop: 340,
        position: 'absolute'
    },
    shape: {
        width: 120, 
        height: 120,
        borderRadius: 60, 
        backgroundColor: '#008000',
        alignSelf: 'center',
        bottom: 5,
        position: 'absolute'
    },
    name: {
        fontSize: 34,
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: 140,
        position: 'absolute'
    },


    title: {
        fontSize: 20,
        fontWeight: 'bold',
        height: 45,
        marginLeft: 60,
        marginTop: 10,
    },
    subTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    smallText: {
        fontSize: 8,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    text1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 5,
    },
    backButton: {
        width: 75,
        height: 40,
        backgroundColor: "#B1F2B3",
        marginTop: 40,
        marginLeft: 25,
        position: 'absolute',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    body: {
        //margin: 12,
        marginTop: 220,
        //borderWidth: 1,
        padding: 20,
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    buttonContainer:{
        //  width: '60%',
          justifyContent: 'center',
          alignItems: 'center',
        //  marginTop: 40,
      },
    button: {
        backgroundColor: '#B1F2B3',
        //width: '75%',
        padding: 10,
       // borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonOutline: {
        backgroundColor: '#B1F2B3',
        //margin: 5,
        //borderColor: 'black',
        //borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 14,
        justifyContent: 'center',
        alignItems: 'center',
        //width: '140%',
    },
    buttonOutlineText: {
        color: '#B1F2B3',
        fontWeight: '700',
        fontSize: 16,
    },

});



