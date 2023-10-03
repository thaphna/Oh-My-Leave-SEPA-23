import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function HealthResult({navigation, route}){
    const { imageUri } = route.params; // Retrieve the image URI passed as a parameter
    const { resultBody } = route.params; 

    const pressHandlerHomePage = () => {
        navigation.navigate('HomePage');
    };

return (
    <ImageBackground source={require('../../assets/GreenBackground.png')} style={styles.background}>
        <TouchableOpacity onPress={pressHandlerHomePage} style={styles.button}>
            <Text style={styles.text1}>BACK</Text>
        </TouchableOpacity>
        <Text style={styles.text2}>Health Diagnosis</Text>
        <Image source={{uri: imageUri}} style={styles.pic}/>
        <View style={styles.resultBox}>
            { resultBody[0].plantName === 'healthy' &&
                <View style={styles.healthyBox}>
                    { resultBody[0].confidence >= 75 &&
                        <Text style={styles.healthText}>Very Healthy</Text>
                    }
                    { resultBody[0].confidence < 75 &&
                        <Text style={styles.healthText}>Healthy</Text>
                    }
                </View>
            }
            { resultBody[0].plantName === 'unhealthy' &&
                <View style={styles.unhealthyBox}>
                    { resultBody[0].confidence >= 75 &&
                        <Text style={styles.healthText}>Very Unhealthy</Text>
                    }
                    { resultBody[0].confidence < 75 &&
                        <Text style={styles.healthText}>Unhealthy</Text>
                    }
                </View>
            }
        </View>        
        <Text style={styles.text3}>Confidence: {resultBody[0].confidence}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    healthyBox: {
        backgroundColor: '#aefcba',
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    unhealthyBox: {
        backgroundColor: '#f7b2ad',
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    resultBox: {
        backgroundColor: '#D9D9D9',
        marginRight: 25,
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 10,
        height: 100,
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
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
    healthText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10
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
        width: 290,
        marginTop: 25
    },
    scrollViewCustom: {
        marginLeft: 30,
        marginTop: 10
    }



});



