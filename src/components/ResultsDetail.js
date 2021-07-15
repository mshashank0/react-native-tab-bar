import React from 'react';
import { 
  View, 
  Image, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Linking,
  Alert
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import phone from '../images/phone.png'

const ResultsDetail = ({ result, isSelected }) => {
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

 const call = phone => {
    console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    }
    else  {
      phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (!supported) {
        Alert.alert('Not able to make call');
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch(err => console.log(err));
  };

  return (
    <View style={[isSelected === true ? styles.selectedContainer : styles.container]}>
      <View style={styles.firstSection}>
        <Text style={[styles.time, styles.text]}>{getDateString()}</Text>
        <View style={result.scheduled_date !== null ? styles.firstSubSection : null}>
          <Text style={[styles.name, styles.text]}>{result.quote_number}</Text>
          <Text style={styles.text}>
            {result.insured.name}
          </Text>
        </View>
      </View>
      <View style={styles.secondSection}>
        <Text style={styles.text}>
          <Feather style={styles.mapPin} name="map-pin" />
          &nbsp;{result.prop_address1}
        </Text>
        <TouchableOpacity
          onPress={() => {
            const phoneNumber = result.insured.phone;
            call(phoneNumber);
          }}
        >
          <Image style={styles.phone} source={phone} />
        </TouchableOpacity>

      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 8,
    padding: 8,
    backgroundColor: 'rgba(32, 33, 38, 1.0)',
    flexDirection: 'column'
  },
  selectedContainer: {
    marginVertical: 5,
    marginHorizontal: 8,
    padding: 8,
    backgroundColor: 'rgba(42, 43, 48, 1.0)',
    flexDirection: 'column'
  },
  firstSection: {
    flexDirection: 'row'
  },
  secondSection: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  },
  phone: {
    width: 24,
    height: 24,
  }
});

export default ResultsDetail;
