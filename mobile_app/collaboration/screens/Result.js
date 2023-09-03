import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function Result({navigation, route}){
    const { resultBody } = route.params; 

    const pressHandlerTakingPicture = () => {
        navigation.navigate('CameraTakingPicture');
    };

    const pressHandlerHomePage = () => {
        navigation.navigate('HomePage');
    };

    const pressHandlerCameraPage = () => {
        navigation.navigate('CameraPage');
    };

    const mapResultList = () => {
        //console.log(resultBody)
        return resultBody.map((data) => {
            return (
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text3}>{data.plantName}</Text>
                        <Text style={styles.text4}>Confidence: {data.confidence}%</Text>
                    </View>
                        <ScrollView style={styles.scrollViewCustom} horizontal={true}>
                            <Image source={require('../assets/leave2.png')} style={styles.pic}/>
                            <Image source={require('../assets/leave3.png')} style={styles.pic}/>
                            <Image source={require('../assets/leave4.png')} style={styles.pic}/>
                        </ScrollView>                               
                </View>
            )
        })
    }

return (
    <ImageBackground source={require('../assets/GreenBackground.png')} style={styles.background}>
        <TouchableOpacity onPress={pressHandlerCameraPage}  style={styles.button}>
            <Text style={styles.text1}>BACK</Text>
        </TouchableOpacity>
        <View style={styles.resultHeading}> 
            <Text style={styles.text2}>Result</Text>
            { resultBody.length > 0 &&
                <Image source={require('../assets/leave1.jpg')} style={styles.result}/>
            }           
        </View>
        { resultBody.length > 0 &&
            <View>
                <ScrollView style={styles.scrollView}>
                    {mapResultList()}
                </ScrollView>
            </View>
        }
        { resultBody.length <= 0 &&
            <Text style={styles.text3}>The image could not be successfully classified.</Text>
        }
        
        
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
        fontSize: 40,
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
    text4: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 25,
        marginRight: 10
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
        width: 120,
        height: 100,
        marginTop: 5,
        marginRight: 5
    },
    scrollViewCustom: {
        marginLeft: 30,
        marginTop: 10
    }



});



