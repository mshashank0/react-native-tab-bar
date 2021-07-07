import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.name, styles.text]}>{result.quote_number}</Text>
      <Text style={styles.text}>
       {result.insured.name}
      </Text>
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
  mapPin: {
    fontSize:15,
    marginRight: 20,
    color:"rgba(184, 184, 184, 1.0)" 
  },
  name: {
    fontWeight: 'bold',
  },
  text: {
    padding:3,
    color: 'white'
  }
});

export default ResultsDetail;
