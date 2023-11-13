import React from 'react';
import { Text } from 'react-native';

import { Spaces, fontSizes, Colors } from '../Constants/theme';
import style from '../styles';

export const Title = ({text}) => {
  return (
    <Text style={style.title}>
      {text}
    </Text>
  )
}

export const Paragraph = ({text}) => {
    return (
      <Text style={style.paragraph}>
        {text}
      </Text>
    )
}
