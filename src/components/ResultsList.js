import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform
} from 'react-native';
import ResultsDetail from './ResultsDetail';
import InspectionContext from '../context/InspectionContext';

const ResultsList = ({ results, navigation }) => {
  const { inspection, selectInspection } = useContext(InspectionContext);
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={results}
        style={styles.list}
        keyExtractor={result => "\"" + result.claim_id + "\""}
        renderItem={({ item }) => {
          var isSelected = false
          if(inspection === item) {
            isSelected = true
          }
          return (
            <TouchableOpacity
              onPress={() => {
                if (Platform.isPad) {
                  selectInspection(item);
                }
                else {
                  navigation.push('InspectionDetails', { details: item })
                }
              }}
            >
              <ResultsDetail result={item} isSelected={isSelected}/>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  list: {
    marginTop: 5
  }
});

export default ResultsList;
