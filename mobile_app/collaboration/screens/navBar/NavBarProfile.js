// BottomNavBar.js
import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';


export default function BottomNavBar({ navigation }) {
    const pressHandlerHomePage = () => {
        navigation.navigate('HomePage');
    };

    const pressHandlerCameraPage = () => {
        navigation.navigate('CameraPage');
    };

    const pressHandlerProfile = () => {
        navigation.navigate('Profile');
    };
    

    return (
        <View style={[styles.rowFix, styles.bottomNav]}>
            <View style={[styles.rowFix, styles.bottomNav]}>
                <TouchableOpacity onPress={pressHandlerHomePage}>
                    <Image
                        style={styles.homeIcon}
                        source={require("../../assets/home.png")}
                        alt={"Home Icon"}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={pressHandlerCameraPage}>
                    <Image
                        style={styles.cameraIcon}
                        source={require("../../assets/camera.png")}
                        alt={"Camera Icon"}
                    />
                </TouchableOpacity>

                <View style={styles.profileIconWrapper}>
                    <TouchableOpacity onPress={pressHandlerProfile}>
                        <Image
                            style={styles.profileIcon}
                            source={require("../../assets/profile.png")}
                            alt={"Profile Icon"}
                        />
                    </TouchableOpacity>
                    <Text style={styles.profileLabel}>Profile</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    //Navigation Bar Styles
    rowFix: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bottomNav: {
        backgroundColor: "green",
        height: 75,
        alignItems: "center",
        width: "100%",
        justifyContent: "space-around",
    },
    cameraIcon: {
        resizeMode: 'contain',
        width: 65,
        height: 65,
        marginLeft: 50,
    },
    profileIcon: {
        resizeMode: 'contain',
        width: 85,
        height: 85,
    },
    homeIcon: {
        resizeMode: 'contain',
        width: 75,
        height: 55,
        marginLeft: 20,
    },
    profileIconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 80,
        width: 145,
        height: 145,
        backgroundColor: 'green',
        marginBottom: 30,
    },
    profileLabel: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});
