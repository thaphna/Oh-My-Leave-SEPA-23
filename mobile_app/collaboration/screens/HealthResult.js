import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function HealthResult({navigation, route}){
    const { resultBody } = route.params; 

    const pressHandlerHomePage = () => {
        navigation.navigate('HomePage');
    };

return (
    <ImageBackground source={require('../assets/GreenBackground.png')} style={styles.background}>
        <TouchableOpacity onPress={pressHandlerHomePage}>
            <View style={styles.button}>
                <Text style={styles.text1}>BACK</Text>
            </View>
        </TouchableOpacity>
        <Text style={styles.text2}>Health Diagnosis</Text>
        <Image source={require('../assets/leave1.jpg')} style={styles.pic}/>
        
        { resultBody[0].plantName === 'healthy' &&
            <View style={styles.healthyBox}>
                <Text style={styles.healthyText}>Healthy</Text>
            </View>
        }
        { resultBody[0].plantName === 'unhealthy' &&
            <View style={styles.unhealthyBox}>
                <Text style={styles.unhealthyText}>Unhealthy</Text>
            </View>
        }
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    healthyBox: {
        backgroundColor: '#aefcba',
        height: 79,
        marginRight: 25,
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    unhealthyBox: {
        backgroundColor: '#f7b2ad',
        height: 79,
        marginRight: 25,
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    resultHeading: {
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    background: {
        flex: 1,
        resizeMode: 'stretch'
    },
    button: {
        width: 75,
        height: 40,
        backgroundColor: "#B1F2B3",
        marginTop: 40,
        marginLeft: 25
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
        fontSize: 25,
        marginTop: 30,
        marginLeft: 25
    },
    text3: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 30,
        marginTop: 25,
        flex: 2
    },
    healthyText: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 20
    },
    unhealthyText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 20
    },
    result: {
        height: 120,
        width: 170, 
        marginTop: 0,
        marginLeft: 20
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
        alignSelf: 'center',
        height: 200,
        width: 250,
        marginTop: 25
    },
    scrollViewCustom: {
        marginLeft: 30,
        marginTop: 10
    }



});



