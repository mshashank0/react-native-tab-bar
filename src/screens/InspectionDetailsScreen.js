import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InspectionDetailsScreen = ({ route , navigation}) => {
  const { details } = route.params;
  return (
    <View style={styles.container}>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(24, 26, 30, 1.0)',
    flex: 1
  },
  text: {
    color: 'white'
  }
});

export default InspectionDetailsScreen;
