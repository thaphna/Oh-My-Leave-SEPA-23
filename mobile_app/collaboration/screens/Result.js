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
        <TouchableOpacity onPress={pressHandlerCameraPage}>
            <View style={styles.button}>
                <Text style={styles.text1}>BACK</Text>
            </View>
        </TouchableOpacity>
        <Text style={styles.text2}>Result</Text>
        <Image source={require('../assets/leave1.jpg')} style={styles.result}/>
        <Text style={styles.text3}>Aristotelia Chilensis                                     Precise: 95%</Text>
        <View style={styles.box1}>
            <Image source={require('../assets/leave2.png')} style={styles.pic}/>
            <Image source={require('../assets/leave3.png')} style={styles.pic}/>
            <Image source={require('../assets/leave4.png')} style={styles.pic}/>
        </View>
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
    button: {
        width: 75,
        height: 40,
        backgroundColor: "#B1F2B3",
        marginTop: 40,
        marginLeft: 25,
        position: 'absolute',
    },
    text1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 5,
    },
    text2: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 120,
        marginLeft: 25,
        position: 'absolute',
    },
    result: {
        height: 120,
        width: 170, 
        marginTop: 100,
        marginLeft: 200,
    },
    text3: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 20,
        marginTop: 25,
    },
    box1: {
        height: 110,
        width: 390,
        marginTop: 10 ,
        marginLeft: 12,
        backgroundColor: '#d3d3d3',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    pic: {
        width: 120,
        height: 100,
        marginTop: 5,
    },




});



