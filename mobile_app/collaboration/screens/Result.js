import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

export default function Result({navigation}){
    const pressHandlerTakingPicture = () => {
      navigation.navigate('CameraTakingPicture');
     };

     const pressHandlerHomePage = () => {
      navigation.navigate('HomePage');
    };

    const pressHandlerCameraPage = () => {
        navigation.navigate('CameraPage');
    };

  return (
    <ImageBackground source={require('../assets/GreenBackground.png')} style={styles.background}>
        <Text>Result Page!</Text>
        <TouchableOpacity onPress={pressHandlerCameraPage}>
            <Text>Back</Text>
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
    },




});



