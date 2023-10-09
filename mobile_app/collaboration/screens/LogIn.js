import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity, TextInput, SafeAreaView, Button, Alert, KeyboardAvoidingView } from 'react-native';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';

export default function LogIn(){

    
    const pressHandlerSignUp = () => {
        navigation.navigate('SignUp');
      };

    const pressHandlerHomePage = () => {
    navigation.navigate('HomePage');
    };

   // const TextInputExample = () => {
      //  const [text, onChangeText] = React.useState('Username');
     //   const [number, onChangeNumber] = React.useState('');

      const navigation = useNavigation()

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("HomePage")
            }
        })
        //if u leave the screen itll unsubscribe from the listener
        return unsubscribe
      }, [])

     const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Signed up with:', user.email);
            })
            .catch(error => alert(error.message))
     }
    
     const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
    }

  return (

    <ImageBackground source={require('../assets/GreenBackground.png')} style={styles.background}>

        <View style={styles.body}>
            
            <SafeAreaView>

                <Text style={styles.title}>Welcome Back!</Text>

                <Text style={styles.subTitle}>Log In</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder="Email"
                />
            
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder="Password"
                    secureTextEntry
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                    onPress={handleLogin}
                    style={[styles.button, styles.buttonOutline]}
                    >
                    <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={pressHandlerSignUp}
                        style={[styles.button, styles.buttonOutline]}>
                        <Text style={styles.buttonText}>Create a New Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={pressHandlerHomePage}
                        style={[styles.buttonSkip, styles.buttonOutline]}>
                        <Text style={styles.buttonText}>Skip Signing In</Text>
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
    logo: {
        width: 250,
        height: 250,
        marginLeft: 85,
        marginTop: 100,
        position: 'absolute'
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
    bar: {
        width: '100%',
        height: 80,
        backgroundColor: '#008000',
        marginTop: '200%',
        bottom: 0,
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
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: 85,
        position: 'absolute'
    },



    title: {
        fontSize: 40,
        fontWeight: 'bold',
        //height: 45,
        marginLeft: 10,
        marginTop: 10,
    },
    subTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    body: {
       // margin: 12,
        marginTop: 100,
        //borderWidth: 1,
        padding: 20,
       // justifyContent: 'center',
        //alignItems: 'center',
    },
    buttonSkip: {
        //width: 45,
        //height: 45,
        //marginLeft: 50,
        //bottom: 50,
        //position: 'absolute',
        marginTop: '60',
        padding: 10,
    },

    buttonContainer:{
      //  width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
      //  marginTop: 40,
    },
    button: {
        backgroundColor: '#B1F2B3',
        //width: '30%',
        padding: 10,
       // borderRadius: 10,
       // alignItems: 'center',
       // justifyContent: 'center',
    },
    buttonOutline: {
        backgroundColor: '#B1F2B3',
        margin: 5,
        //borderColor: 'black',
        //borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#B1F2B3',
        fontWeight: '700',
        fontSize: 16,
    },

});



