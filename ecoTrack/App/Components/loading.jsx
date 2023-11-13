import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Colors } from '../Constants/theme';


export const LoadingIndicator = () =>{
    return(
            <ActivityIndicator size="large" color={Colors.secondary} />
        )
}
