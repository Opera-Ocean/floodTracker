import React from 'react';
import { ScrollView, View, Text } from 'react-native';

import {Title, SubHeading, Paragraph} from './texts';
import { Colors } from '../Constants/theme';
import style from '../styles';

const SearchResult = ({ result }) => {
  return (
    <ScrollView style={style.searchResultContainer}>
      {result ? (
        <>
          <Text style={style.searchResultTitle}>{result.label}</Text>
          
          <View style={style.detailScreen}>

            {/* <StationControl /> */}

            <Title text={selectedStation.label} />
            <Paragraph text={`Date Opened: ${selectedStation.dateOpened}`}  />
            <Paragraph text={`Latitude: ${selectedStation.lat}`}  />
            <Paragraph text={`Longitude: ${selectedStation.long}`}  />
            <Paragraph text={`Notation: ${ selectedStation.notation }`}  />
            <Paragraph text={`Northing: ${ selectedStation.northing }`}  />
            <Paragraph text={`Rivername: ${ selectedStation.riverName }`}  />
            <Paragraph text={`Easting: ${ selectedStation.easting }`}  />
            <Paragraph text={`Catchment Name: ${ selectedStation.catchmentName }`}  />
            <Paragraph text={`Period: ${ selectedStation.measures[0].period }`}  />

            <View style={{ marginVertical: Spaces.large }}>
              <SubHeading text="Live Reading...." />
            </View>

          {/* {!data ? <LoadingIndicator /> :
                <MeasurementLineChart line={data} />
          } */}

        </View>

        <View style={{ marginVertical: Spaces.large }}>
              <SubHeading text="Live Data on Table" />
        </View>

        {/* <TableColumn />

          {
            !data ? <LoadingIndicator /> :  
            data.map((reading, i) =>(
              <TableRow key={i}         
              readingTime={reading.dateTime}
                readingValue={ reading.value } />
              ))
          } */}

      
        </>
      ) : (
        <Text style={{ color: Colors.gray }}>No results found</Text>
      )}
    </ScrollView>
  );
};

export default SearchResult;
