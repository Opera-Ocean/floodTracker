import React from 'react';
import { Appearance } from "react-native";
import { Button, Icon } from '@rneui/themed';

import { Spaces, fontSizes, Colors } from '../Constants/theme';
// import style from '../styles';

const colorScheme = Appearance.getColorScheme();
const light = colorScheme === 'light';

export const DefaultIcon = ({name}) =>{

  return(
      <Icon name={name} size={ Spaces.large * 1.5 }
      color={ light ? Colors.gray : Colors.gray } />
  )
}

export const ButtonIcon = ({handlePress}) =>{

  return(
    <Button  onPress={handlePress}
      title="Back to Stations" 
      type="outline"
      color={Colors.gray}
      buttonStyle={{ width: Spaces.xLarge, borderColor: Colors.secondary, 
        borderWidth: fontSizes.small / 10 }}
      icon={
        <Icon
          name="chevron-left"
          size={fontSizes.large}
          color={Colors.secondary}
        />
      }
      iconContainerStyle={{ background: Colors.primary }}
      loadingProps={{ animating: true }}
     />
  )
}
