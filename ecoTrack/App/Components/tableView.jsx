import React from 'react';
import { ScrollView, View, Text } from "react-native";

import style from '../styles';

export const TableColumn = () =>{
    return(
        <View style={style.row}>
            <Text style={style.tableColumn}> Time </Text>
            <Text style={style.tableColumn}> Value </Text>
        </View>
    )
}

export const TableRow = ({readingTime, readingValue}) =>{

    function formatTime(date) {

        let convertedDate = new Date(date);
          
        // Get hours and minutes from the date
        const hours = convertedDate.getHours()
        const minutes = convertedDate.getMinutes()
      
        // Return the formatted time
        return `${hours}:${minutes}`;
      }

    return(
        <View style={[style.table, style.row]}>
            <Text style={style.cell}>{formatTime(readingTime)}</Text>
            <Text style={style.cell}>{readingValue}</Text>
        </View>
    )
}
