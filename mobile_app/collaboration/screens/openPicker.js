import React from "react";
import { View, Text, Button } from 'react-native';

export default function openPicker (options) {
    console.log(options)
    const {count: maxFiles, success, complete} = options
    return ImagePicker.openPicker({
      multiple: true,
      maxFiles
    }).then(images => {
      console.log(images)
      let data = Object.assign({}, getRes(images), res)
      success && success(data)
      complete && complete(data)
      return data
    })
}