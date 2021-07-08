import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const ScheduledListScreen = ({navigation}) => {
  const [getInspectionApi, results, errorMessage] = useResults();

  const filterResult = status => {
    return results.filter(result => {
      return result.scheduled_date !== null;
    });
  };

  return (
    <View style={styles.container}>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultsList
          navigation={navigation}
          results={filterResult('Scheduled')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(24, 26, 30, 1.0)',
    flex:1
  }
});

export default ScheduledListScreen;
