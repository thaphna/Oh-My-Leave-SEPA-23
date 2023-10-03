import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Settings({navigation}){
    const [ready, setReady] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Spring', value: 'spring'},
        {label: 'Summer', value: 'summer'},
        {label: 'Autumn', value: 'autumn'},
        {label: 'Winter', value: 'winter'}
    ]);

    const pressHandlerCameraPage = () => {
        navigation.navigate('CameraPage');
    };

    useEffect(() => {
        console.log("initialise settings page")    
        
        const getSavedSelectedModelName = async (storeKey, defaultValue) => {
            savedSelectedModel = await getData(storeKey, defaultValue)
            console.log("got data " + savedSelectedModel)  
            setReady(true)
            setValue(savedSelectedModel)
        }

        getSavedSelectedModelName('SelectedModel', 'summer')
    }, [navigation]);



    const storeData = async (storeKey, value) => {
        try {
            await AsyncStorage.setItem(storeKey, value)
        } catch (e) {
            console.error("Failed to save settings. " + e)
        }
    }
    
    const getData = async (storeKey, defaultValue) => {
        try {
            console.log('key: ', storeKey)
            const value = await AsyncStorage.getItem(storeKey)
            console.log(value)
            if(value !== null) {
                return value
            }
            else {
                await storeData(storeKey, defaultValue)
                return defaultValue
            }
        } catch(e) {
            console.error("Failed to read settings. " + e)
        }
    }

    
    if (!ready) return null
    
    return (
        <ImageBackground source={require('../assets/GreenBackground.png')} style={styles.background}>
            <TouchableOpacity onPress={pressHandlerCameraPage} style={styles.button}>
                <Text style={styles.text1}>BACK</Text>
            </TouchableOpacity>
            <View style={styles.settingsSection}>
                <Text style={styles.text2}>Settings</Text>
                <View style={styles.settingsRow}>
                    <Text style={styles.text3}>Model</Text>
                    <DropDownPicker  style={styles.dropdown}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        onChangeValue={(value) => {
                            storeData('SelectedModel', value);
                        }}
                        theme="LIGHT"
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    settingsSection: {
        flexDirection: 'column',
        marginTop: 60
    },
    settingsRow: {
        flexDirection: 'row'
    },
    dropdown: {
        backgroundColor: "#ffffff",
        marginTop: 20,
        marginLeft: 20,
        width: 200
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
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 10,
        marginLeft: 25
    }
});



