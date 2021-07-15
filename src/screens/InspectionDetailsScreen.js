import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InspectionContext from '../context/InspectionContext';

const InspectionDetailsScreen = ({ route }) => {
  const {inspection, selectInspection} = useContext(InspectionContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route !== undefined ? route.params.details.quote_number : (inspection !== null ? inspection.quote_number : "")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16171a' ,
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: 'white', 
    alignSelf: 'center'
  }
});

export default InspectionDetailsScreen;
