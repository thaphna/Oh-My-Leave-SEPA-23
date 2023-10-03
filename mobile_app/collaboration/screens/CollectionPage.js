import React, { useRef } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity,Image, ImageBackground } from 'react-native';
import MyBottomSheet from './MyBottomSheet.js';
// import RBSheet from 'react-native-raw-bottom-sheet'
// import { openCamera, openPicker } from 'react-native-image-crop-picker';


export default function CollectionPage({navigation}){

    // const bottomSheetRef = useRef(null);
    const pressHandlerBottomSheet = () =>{
        navigation.navigate('MyBottomSheet');
    }

    
    return(
        <View style={styles.container}>      
        
            <TouchableOpacity style={{ width: 100, height: 50, backgroundColor: '#B1F2B3', borderRadius:5, marginTop: 70,marginBottom: 30, marginRight: 250 ,justifyContent: 'center', alignItems: 'center'  }} >     
                <Text style={{fontWeight: 'bold'}}>BACK</Text>
            </TouchableOpacity> 
            <View style={{ flexDirection: 'row', marginRight:160, marginBottom:45, alignContent:"center"}}>
                <Image source={require('../../assets/icon.png')}  />
                <Text style={{fontWeight: 'bold'}}>User Name</Text>
            </View>

            
            <MyBottomSheet/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  