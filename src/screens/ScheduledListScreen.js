import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const ScheduledListScreen = ({navigation}) => {
  const [getInspectionApi, results, errorMessage] = useResults();

  const filterResult = status => {
    return results;
  };

  return (
    <View style={styles.container}>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultsList
          style={styles.listStyle}
          navigation={navigation}
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

// const navigator = createStackNavigator(
//   {
//     List: InspectionListScreen,
//     Details: InspectionDetailsScreen,
//   },
//   {
//     initialRouteName: 'List',
//     defaultNavigationOptions: {
//       title: 'Inspections',
//       headerTintColor: 'white',
//       headerStyle:{backgroundColor:'#181A1E'}
//     },
//   }
// );

// export default createAppContainer(navigator);


export default ScheduledListScreen;
