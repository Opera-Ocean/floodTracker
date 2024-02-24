import React from 'react';
import { ToastAndroid } from 'react-native';

export const DisplayErrMessage = (message) =>{
    return(
        ToastAndroid.showWithGravity(message, 
         ToastAndroid.SHORT,
         ToastAndroid.CENTER
        )
     )
}
