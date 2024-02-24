import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View
} from 'react-native';

import { StationControl } from '../Navigation/route';
import { MeasurementLineChart } from './Partials/charts';

import { Spaces } from '../Constants/theme';
import { DisplayErrMessage } from '../Components/loading';
import { Title, SubHeading, Paragraph } from '../Components/texts';
import { LoadingIndicator } from '../Components/loading';
import { TableColumn, TableRow } from '../Components/tableView';

import style from '../styles';

const StationDetailScreen = ({route}) => {
  const { selectedStation } = route.params;
  const stationID = `${selectedStation["@id"]}/readings?_sorted&_limit=48`
  const stationIDHTTPS = stationID.replace(/^http:/, 'https:');
  // console.log(stationIDHTTPS)

  // .replace(/^http:/, 'https:');
  
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchStationDetail = async() => {
    setIsLoading(true)
    await fetch(stationIDHTTPS)
          .then(response => response.json())
          .then(data => {
              setData(data.items)
          })

          .catch(() => {
              DisplayErrMessage("Network Error! Check your internet.")
          });
    }

  useEffect(() => {
    fetchStationDetail();
  }, []);


  return (
        <ScrollView>
          <View style={style.detailScreen}>

            <StationControl />

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

          {!data ? <LoadingIndicator /> :
                <MeasurementLineChart line={data} />
          }

        </View>

        <View style={{ marginVertical: Spaces.large }}>
              <SubHeading text="Live Data on Table" />
        </View>

        <TableColumn />

          {
            !data ? <LoadingIndicator /> :  
            data.map((reading, i) =>(
              <TableRow key={i}         
              readingTime={reading.dateTime}
                readingValue={ reading.value } />
              ))
          }

      </ScrollView>
  );
}

export default StationDetailScreen;
