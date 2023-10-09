import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Platform} from 'react-native';
import Constants from 'expo-constants';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker'
import Button from './Button';
import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { CameraModeEnum } from '../common/CameraModeEnum';

export default function CameraFeature({navigation, route}){
    const { cameraMode } = route.params; 

    const pressHandlerBackButton = () => {
        if (cameraMode === CameraModeEnum.Prediction) {
            navigation.navigate('CameraPage');
        }
        else if (cameraMode === CameraModeEnum.HealthCheck) {
            navigation.navigate('HomePage');
        }
        
    };

    const handlerUploadPage = (route) => {
        navigation.navigate('Upload', route);
    };

    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
            let galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (galleryStatus.status !== 'granted') {
                alert('Sorry, we need gallery permissions to make this work!');
            }       
        })();
    }, []);

    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                console.log('Take picture');
                console.log(data);
                setImage(data.uri);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const savePicture = async () => {
        if(image) {
            try {
                setImage(null);
                console.log('Saved Successfully');
                if (Platform.OS === 'ios' || Platform.OS === 'android') {
                    const asset = await MediaLibrary.createAssetAsync(image);
                    handlerUploadPage({ imageUri: asset.uri, cameraMode: cameraMode });
                }
                else {
                    handlerUploadPage({ imageUri: image, cameraMode: cameraMode });
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        console.log(result.uri);
    
        //do we really need to save to phone gallery again on an image we selected and crop?
        if (!result.cancelled) {
            setImage(result.uri);
        }

        handlerUploadPage({ imageUri: result.uri, cameraMode: cameraMode });
    };

    if (hasCameraPermission === false && Platform.OS !== 'ios' && Platform.OS !== 'android') {
        return <Text>Can't Access to the Camera</Text>;
    }

    return (
        <View style={styles.container}>
            {!image ?(
                <Camera
                    style={styles.camera}
                    ref={cameraRef}
                >
                </Camera>
                        
            ) : (
                    <Image source={{ uri: image}} style={styles.camera}/>
            )}

            <View>
                {image ? (
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 50,
                            marginBottom: 60,
                            marginTop: 20,
                        }}
                    >
                        <Button
                            title="Retake"
                            onPress={() => setImage(null)}
                        />
                        <Button title="Use Photo" onPress={savePicture}/>
                    </View>
                ) : (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={pressHandlerBackButton}> 
                        <Text  style={styles.text1}>Cancel</Text>
                        </TouchableOpacity>
    
                        <View style={styles.photoButtonContainer}>
                          <Text style={styles.text2}>PHOTO</Text>
                          <TouchableOpacity onPress={takePicture}>
                            <View style={styles.circle1}>
                               <View style={styles.circle2}>
                                   <View style={styles.circle3}/>
                             </View>
                              </View>
                         </TouchableOpacity>
      
                        </View>

                        <TouchableOpacity onPress={pickImage}>
                        <Image source={require('../assets/gallery.png')} style={styles.galleryIcon} />
                        </TouchableOpacity>

                    </View>

                )}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000',
        padding: 8,
    },
    controls: {
        flex: 0.5,
    },
    button: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "white",
    },
    camera: {
        flex: 5,
        backgroundColor: 'white',
      },
      topControls: {
        flex: 1,
      },
    


     //Taking Picture Page  

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    
    photoButtonContainer: {
        alignItems: 'center',
    },
    circle1: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#D3D3D3',
        justifyContent: 'center',  
        alignItems: 'center',  
        marginBottom: 50,

    },
    circle2: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'black', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle3: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'white', 
    },

    galleryIcon: {
        width: 50,
        height: 50,
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "white",
    },
    text2: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "white",
        marginBottom: 15,
        marginTop: 15,
    },

})