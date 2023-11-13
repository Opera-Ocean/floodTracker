import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

import { DisplayErrMessage } from './popups.jsx';
import style from '../styles';

const Select = (props) => {
  const[isLoading, setIsLoading] = useState(false);
  const [measurementStation, setMeasurementStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const navigation = useNavigation();

  const fetchMeasurementStations = async() => {
      setIsLoading(true)
      await fetch('https://environment.data.gov.uk/flood-monitoring/id/stations')
            .then(response => response.json())
            .then(data => {
                setMeasurementStations(data.items)
            })
            .catch(() => {
                DisplayErrMessage("Network Error! Check your internet.")
            });
      }

    useEffect(() => {
      fetchMeasurementStations();
    }, [props]);

    const handleStationChange = (itemValue) =>{
         const singleStation = measurementStation.find((station) => station["@id"] === itemValue );

    // Set the selected station's data
    setSelectedStation(singleStation);

    // Navigate to the StationDetail screen with the selected station's data
    navigation.navigate('Station Detail', { selectedStation: singleStation });
    }

      return(
          <View style={style.pickerContainer}>
              <Picker
                selectedValue={measurementStation}
                onValueChange={(itemValue) => handleStationChange(itemValue)}>
                <Picker.Item label="Select a station" value={null} />
                {measurementStation.map((station) => (
                  <Picker.Item key={station["@id"]} label={station.label} value={station["@id"]} />
                ))}
              </Picker>
          </View>
  )

}

export default Select;
