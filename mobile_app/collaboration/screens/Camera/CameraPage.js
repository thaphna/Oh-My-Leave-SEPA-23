import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { CameraModeEnum } from '../../common/CameraModeEnum';
import { ParentPageEnum } from '../../common/ParentPageEnum';
import NavBarCamera from '../navBar/NavBarCamera';

export default function CameraPage({ navigation }) {
    const pressHandlerTakingPicture = () => {
        navigation.navigate('CameraFeature', { cameraMode: CameraModeEnum.Prediction });
    };

    const pressHandlerHomePage = () => {
        navigation.navigate('HomePage');
    };

    const pressHandlerSelf = () => {s
        navigation.navigate('CameraPage');
    };

    const pressHandlerProfile = () => {
        navigation.navigate('Profile');
    };

    const pressHandlerSettings = () => {
        navigation.navigate('Settings', { settingParentPage: ParentPageEnum.CameraPage });
    };

    return (
        <ImageBackground source={require('../../assets/GreenBackground.png')} style={styles.background}>

            {/*Main Content*/}
            <View style={styles.mainContent}>
                <TouchableOpacity onPress={pressHandlerSettings}>
                    <View style={styles.settingBox}>
                        <Image source={require('../../assets/settings.png')} style={styles.settings} />
                    </View>
                </TouchableOpacity>
                <Image source={require('../../assets/leave.png')} style={styles.logo} />
                <TouchableOpacity onPress={pressHandlerTakingPicture}>
                    <View style={styles.circle}>
                        <Image source={require('../../assets/camera.png')} style={styles.camera} />
                    </View>
                </TouchableOpacity>
            </View>


            <NavBarCamera navigation={navigation} />

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
    logo: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    circle: {
        width: 200, 
        height: 200,
        borderRadius: 100, 
        backgroundColor: '#D9D9D9',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    camera: {
        width: 120,
        height: 100,
        alignSelf: 'center'
    },

    settingBox: {
        width: 40,
        height: 40,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginTop: 80,
        marginEnd: 20,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    settings: {
        width: 25,
        height: 25,
        alignSelf: 'center'
    },

});



