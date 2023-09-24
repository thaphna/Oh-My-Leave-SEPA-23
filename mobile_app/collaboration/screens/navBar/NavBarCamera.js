// BottomNavBar.js
import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';


export default function BottomNavBar({ navigation }) {
    const pressHandlerHomePage = () => {
        navigation.navigate('HomePage');
    };

    const pressHandlerSelf = () => {
        navigation.navigate('CameraPage');
    };

    const pressHandlerProfile = () => {
        navigation.navigate('Profile');
    };

    return (
        <View style={[styles.rowFix, styles.bottomNav]}>
            <TouchableOpacity onPress={pressHandlerHomePage}>
                <Image
                    style={styles.homeIcon}
                    source={require("../../assets/home.png")}
                    alt={"Home Icon"}
                />
            </TouchableOpacity>

            <View style={styles.cameraIconWrapper}>
                <TouchableOpacity onPress={pressHandlerSelf}>
                    <Image
                        style={styles.cameraIcon}
                        source={require("../../assets/camera.png")}
                        alt={"Camera Icon"}
                    />
                </TouchableOpacity>
                <Text style={styles.cameraLabel}>Camera</Text>
            </View>

            <TouchableOpacity onPress={pressHandlerProfile}>
                <Image
                    style={styles.profileIcon}
                    source={require("../../assets/profile.png")}
                    alt={"Profile Icon"}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    rowFix: {
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    bottomNav: {
        backgroundColor: "green",
        height: 80,
        alignItems: "center",
        width: "100%",
        justifyContent: "space-around",
        

    },
    homeIcon: {
        resizeMode: 'contain',
        width: 55,
        height: 55,
        marginLeft: 20,
    },
    cameraIcon: {
        resizeMode: 'contain',
        width: 75,
        height: 75,
    },
    profileIcon: {
        resizeMode: 'contain',
        width: 70,
        height: 70,
        marginRight: 20,
    },
    cameraIconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 80,
        width: 145,
        height: 145,
        backgroundColor: 'green',
        marginBottom: 30,
    },
    cameraLabel: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});
