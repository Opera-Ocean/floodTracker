import React from 'react';
import { Text } from 'react-native';

import style from '../styles';

export const Title = ({text}) => {
  return (
    <Text style={style.title}>
      {text}
    </Text>
  )
}

export const SubHeading = ({text}) => {
  return (
    <Text style={style.subHeading}>
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
