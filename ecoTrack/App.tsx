import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Picker } from '@react-native-picker/picker';
import { Icon } from '@rneui/themed';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [measurementStations, setMeasurementStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);

  useEffect(() => {
    const fetchMeasurementStations = async () => {
      try {
        const response = await fetch(
          'https://environment.data.gov.uk/flood-monitoring/id/stations'
        );
        const data = await response.json();
        setMeasurementStations(data.items);
      } catch (error) {
        console.error('Error fetching measurement stations:', error);
      }
    };

    fetchMeasurementStations();
  }, []);


  // const [floodAreas, setFloodAreas] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  //
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://environment.data.gov.uk/flood-monitoring/id/floodAreas');
  //       const data = await response.json();
  //       setFloodAreas(data.items.slice(0, 5));
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //
  //   fetchData();
  // }, []);
  //
  // if (loading) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }
  //
  // if (error) {
  //   return (
  //     <View>
  //       <Text>Error: {error}</Text>
  //     </View>
  //   );
  // }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

        <View>
            <Text>Welcome To Eco Tracker!</Text>
            <Text> You can search or select a Station to get information about the Station </Text>

            <Picker
              selectedValue={selectedStation}
              onValueChange={(itemValue) => handleStationChange(itemValue)}>
              <Picker.Item label="Select a station" value={null} />
              {measurementStations.map((station) => (
                <Picker.Item key={station["@id"]} label={station.label} value={station["@id"]} />
              ))}
            </Picker>

            {selectedStation && (
              <View>
                <Text>Selected Station: {selectedStation}</Text>
                {/* Additional information about the selected station can be displayed here */}
              </View>
            )}

            <Icon name='rowing' color='#fff'/>

        </View>

      </SafeAreaView>

        // <View>
        //   <Text style={{ color: "white"}}>
        //     Welcome to Flood Tracking App!
        //   </Text>
        //         <FlatList
        //           data={floodAreas}
        //           keyExtractor={(item) => item.id}
        //           renderItem={({ item }) => (
        //             <View>
        //               <Text>{item.label}</Text>
        //             </View>
        //           )}
        //         />
        // </View>

  );
}

export default App;
