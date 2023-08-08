import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

export default function CameraTakingPicture({navigation}){
    const pressHandlerTakingPicture = () => {
      navigation.navigate('CameraTakingPicture');
     };

     const pressHandlerUpload = () => {
      navigation.navigate('Upload');
    };

  return (
    <ImageBackground style={styles.background}>
        <Image source={require('../assets/leave1.jpg')} style={styles.leave}/>

    <TouchableOpacity onPress={pressHandlerTakingPicture}>
        <Text style={styles.text1}>Retake</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={pressHandlerUpload}>
        <Text style={styles.text2}>Use Photo</Text>
    </TouchableOpacity>
    </ImageBackground>
 

  );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    background: {
        flex: 1,
        resizeMode: 'stretch',
        backgroundColor: '#000000',
    },
    leave: {
        width: '100%',
        height: '75%',
        marginTop: 75,
    },
    text1: {
        color: '#FFFFFF',
        fontSize: 15,
        marginLeft: 60,
        marginTop: 60,
        position:'absolute',
    },
    text2: {
        color: '#FFFFFF',
        fontSize: 15,
        marginLeft: 290,
        marginTop: 60,
        position:'absolute',
    },

});



