import React, { useState } from 'react';
import { Appearance } from "react-native";
import { View, TextInput } from 'react-native';

import { DefaultIcon } from './icons';
import { Colors } from '../Constants/theme';
import style from '../styles';

const colorScheme = Appearance.getColorScheme();
const light = colorScheme === 'light';

export const SearchBar = () =>{
  // const [search, setsearch] = useState('');



  return(
    <View style={style.searchContainer}>
      <DefaultIcon name='search' />
      <TextInput style={style.searchField}
          placeholder="Search Station"
          placeholderTextColor={ light ? Colors.gray : Colors.gray }
        />
    </View>
  )
}
