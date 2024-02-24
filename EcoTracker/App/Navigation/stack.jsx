import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import CustomContent from '../Components/name';
import IndexScreen from '../Screens/Index';
import StationDetailScreen from '../Screens/stationDetail';

import { Colors } from '../Constants/theme';

const Stack = createNativeStackNavigator();

const ScreenNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName="Index">
            <Stack.Screen name="Index" component={IndexScreen}
              options={{
                  headerStyle: {height: 0}, headerShown: false
            }} />
            <Stack.Screen name="Station Detail" component={StationDetailScreen }
              options={{
                  headerStyle: {height: 0}, headerShown: false
            }} />

       </Stack.Navigator>
    )
}

export default ScreenNavigator;
