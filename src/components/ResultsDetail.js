import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ResultsDetail = ({ result }) => {
  const getDateString = () => {
    if (result.scheduled_date === null) {
        return "";
    }
    else {
      let date = new Date(result.scheduled_date * 1000);
      let hr = date.getHours();
      let min = date.getMinutes();
      hr = (hr < 10) ? "0" + hr : hr;
      min = (min < 10) ? "0" + min : min;

      return hr + "\n" + min;
    }
    
  };
  return (
    <View style={styles.container}>
      <View style={styles.firstSection}>
        <Text style={[styles.time, styles.text]}>{getDateString()}</Text>
        <View style={result.scheduled_date !== null ? styles.firstSubSection : null}>
          <Text style={[styles.name, styles.text]}>{result.quote_number}</Text>
          <Text style={styles.text}>
            {result.insured.name}
          </Text>
        </View>
      </View>
      <Text style={styles.text}>
        <Feather style={styles.mapPin} name="map-pin" />
        &nbsp;Address : {result.prop_address1}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 8,
    backgroundColor: 'rgba(42, 43, 48, 1.0)',
    flexDirection: 'column'
  },
  firstSection: {
    flexDirection: 'row'
  },
  firstSubSection: {
     marginLeft: 4
  },
  mapPin: {
    fontSize: 15,
    marginRight: 20,
    color: "rgba(184, 184, 184, 1.0)"
  },
  name: {
    fontWeight: 'bold',
  },
  time: {
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: -3
  },
  text: {
    paddingVertical: 3,
    color: 'white'
  }
});

export default ResultsDetail;
