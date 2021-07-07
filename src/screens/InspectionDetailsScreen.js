import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InspectionDetailsScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  return (
    <View>
      <Text>Inspection Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default InspectionDetailsScreen;
