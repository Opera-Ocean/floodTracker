import React from 'react';
import { View } from 'react-native';

const Readings = ({time, value}) =>{

        return(
            <View>
                <Text style={{color: "black"}}>Last 24 Hours Readings:</Text>
                {filterDataForLast24Hours().map((reading, index) => (
                    <View key={index}>
                    <Text style={{color: "black"}}>Date Time: {time}</Text>
                    <Text style={{color: "black"}}>Value: {value}</Text>
                    </View>
                ))}
            </View>
        )
    }

export default Readings;
