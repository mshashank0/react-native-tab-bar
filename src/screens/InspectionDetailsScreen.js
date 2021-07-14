import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InspectionContext from '../context/InspectionContext';

const InspectionDetailsScreen = ({ route }) => {
  const {inspection, selectInspection} = useContext(InspectionContext);
  if (route !== undefined) {
    const { details } = route.params;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{inspection.quote_number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a2b30' ,
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: 'white', 
    alignSelf: 'center'
  }
});

export default InspectionDetailsScreen;
