import React from 'react';
import { StyleSheet, View, Button, ImageBackground, Text, Image, Alert, Pressable, useWindowDimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import NavBarHome from '../navBar/NavBarHome';
import { CameraModeEnum } from '../../common/CameraModeEnum';
export default function HomePage({ navigation }) {
    const pressHandlerHomePage = () => {
        navigation.navigate("HomePage");
    };

    const pressHandlerCameraPage = () => {
        navigation.navigate("CameraPage");
    };

    const pressHandlerProfile = () => {
        navigation.navigate('Profile');
    };
    const pressHandlerSettings = () => {
        navigation.navigate('Settings');
    };
    const pressHandlerHealth = () => {
        navigation.navigate('CameraFeature', { cameraMode: CameraModeEnum.Prediction });
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <ImageBackground source={require('../../assets/GreenBackground.png')} style={styles.background}>
            <View style={styles.mainContent}>
                <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                    <Text style={styles.backButtonText}>BACK</Text>
                </TouchableOpacity>
                <View style={styles.contents}>
                    <View style={styles.collection}>
                        <Text style={styles.title}>Collection</Text>
                        <View style={styles.partBox}>
                            <Image style={styles.collectionImage} source={require('../../assets/collectionLeaf.png')} />
                            <Text style={[styles.subtitle, styles.body]}>Date : 15 / 04 /23</Text>
                        </View>
                    </View>
                </View>
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
    mainContent: {
        flex: 1,
    },
    contents: {
    },
    
    backButton: {
        width: 75,
        height: 40,
        backgroundColor: "#B1F2B3",
        marginTop: 40,
        marginLeft: 25
    },

    backButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 5,
    },


    subtitle: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 15,
    },


    title: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 15,
        marginLeft: 10
    },

    body: {
        marginLeft: 8
    },

    partBox: {
        backgroundColor: '#D9D9D9',
        width: 358,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
    },

    collectionImage: {
        width: 100,
        height: 68,
        marginLeft: 10,
    },




});