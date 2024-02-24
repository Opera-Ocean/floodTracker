import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { ButtonIcon } from '../Components/icons';


export const StationControl = () =>{
    const navigation = useNavigation();

    const goToPicker = () => {
        // Navigate back home
    navigation.navigate('Index');
    }

    return (
        <ButtonIcon handlePress={()=>goToPicker()} />
    )
}
