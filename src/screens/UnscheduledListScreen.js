import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const UnscheduledListScreen = () => {
  const [getInspectionApi, results, errorMessage] = useResults();

  const filterResult = status => {
    return results;
  };

  return (
    <View style={styles.container}>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultsList
          style={styles.listStyle}
          results={filterResult('Scheduled')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(24, 26, 30, 1.0)',
    flex: 1
  },
  listStyle: {
     marginTop: 50,
     flexDirection: 'row'
  }
});

export default UnscheduledListScreen;
