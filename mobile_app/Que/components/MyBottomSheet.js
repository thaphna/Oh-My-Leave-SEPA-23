import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import * as ImagePicker from 'expo-image-picker';

const MyBottomSheet = () => {
  const bottomSheetRef = useRef();

  const openBottomSheet = () => {
    bottomSheetRef.current.open();

  };  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });  
    if (!result.canceled) {
      setImage(result.uri);
    }
  };
    

  return (
    <View style={{ flex: 1, marginTop: 200 }}>
      <TouchableOpacity onPress={openBottomSheet}>
        <Text>Oh My Leave</Text>
      </TouchableOpacity>

      <RBSheet
        ref={bottomSheetRef}
        height={300}        
        openDuration={250}
        closeOnDragDown={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#008000',
          },
        }}

      >
        {/* Content of the bottom sheet */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:100 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius:20, marginRight: 80, justifyContent: 'center', alignItems: 'center'}} > 
              <Image source={require('../assets/camera.png')} style={{ width: 50, height: 50}} />
              <Text style={{fontWeight: 'bold'}}>Camera</Text>
            </TouchableOpacity>
    
            <TouchableOpacity 
              onPress={() => {
                // alert("hello")
                // choosePhotoFromLibrary()
                pickImage()
        
              }}
              style={{ 
                width: 100, 
                height: 100, backgroundColor: 'white', 
                borderRadius:20, justifyContent: 'center', alignItems: 'center' }}> 
              <Image source={require('../assets/gallery.png')} style={{ width: 50, height: 50}} />
              <Text style={{fontWeight: 'bold'}}>Gallery</Text>
                          
            </TouchableOpacity> 
          </View>
          <MyBottomSheet/>
        </View>
      </RBSheet>
    </View>
  );
};

export default MyBottomSheet;