import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Context } from '../context/InspectionContext';

import moment from 'moment';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { COLORS } from '../Colors';
//import { WebView } from 'react-native-webview';

const InspectionDetailsScreen = ({ route }) => {
  const images = [
    require("../../assets/j1.jpeg"),
    require("../../assets/j2.jpeg"),
    require("../../assets/j3.jpeg"),
    require("../../assets/j4.jpeg"),
    require("../../assets/j5.jpeg"),
    require("../../assets/j6.jpeg")
  ]
  const { state, selectInspection } = useContext(Context);
  console.log(state);
  const claimData = state;
  if (claimData === null || claimData === undefined) {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.primaryBackground }} ></View>
    )
  }
  else {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.text}>{route !== undefined ? route.params.details.quote_number : (claimData !== null ? claimData.quote_number : "")}</Text>
      // </View>

      <View style={{ flex: 1, backgroundColor: COLORS.primaryBackground }} >

        <View style={{
          margin: 12,
          backgroundColor: COLORS.secondaryBackground,
          borderRadius: 8,
          padding: 12
        }}>

          <View style={{
            height: 120,
            width: "100%",
            backgroundColor: "#ff3344"
          }}>
            <MapView style={{
              flex: 1,
              backgroundColor: "#ff3344"
            }}
              minZoomLevel={1}
              provider={PROVIDER_GOOGLE}
              region={{
                latitude: claimData.prop_location.latitude == null ? 22.974072 : claimData.prop_location.latitude,
                longitude: claimData.prop_location.longitude == null ? -102.540448 : claimData.prop_location.longitude,
                latitudeDelta: 1, longitudeDelta: 1
              }}
              showsUserLocation={true} >
              <Marker coordinate={{
                latitude: claimData.prop_location.latitude == null ? 22.974072 : claimData.prop_location.latitude,
                longitude: claimData.prop_location.longitude == null ? -102.540448 : claimData.prop_location.longitude
              }} />
            </MapView>
          </View>

          <View>
            <Text style={styles.infoHead}>Address</Text>
            <Text style={styles.infoAddress}>{getPropertyAddress(claimData)}</Text>
            <Text style={styles.startDrive}>Start Drive</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.infoHead}>Policy Number</Text>
              <Text style={styles.infoSubhead}>{claimField(claimData.policy_number)}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.infoHead}>Loss type</Text>
              <Text style={styles.infoSubhead}>{claimField(claimData.loss_type)}</Text>
            </View>

          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.infoHead}>Loss date</Text>
              <Text style={styles.infoSubhead}>{formatDate(claimData.loss_date)}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.infoHead}>Contact number</Text>
              <Text style={styles.infoSubhead}>{claimField(claimData.insured.phone)}</Text>
            </View>

          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.infoHead}>Inspection type</Text>
              <Text style={styles.infoSubhead}>{claimField(claimData.claim_type)}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.infoHead}>Policy type</Text>
              <Text style={styles.infoSubhead}>{claimField(claimData.policy_type)}</Text>
            </View>

          </View>



          <View>
            <Text style={styles.infoHead}>Description</Text>
            <View style={{
              height: 80,
              marginTop: 8
            }}>
              {/* <WebView
                      style={{ flex: 1 }}
                      originWhitelist={['*']}
  
                      source={{ html: claimData.description }} /> */}
            </View>
          </View>

        </View>

        <View style={{
          flex: 1,
          justifyContent: 'flex-end',

        }}>
          <Text style={styles.recording}>Recordings ({images.length})</Text>
          <FlatList
            keyExtractor={image => "\"" + image + "\""}
            data={images}
            horizontal={true}
            style={{ flexGrow: 0 }}
            renderItem={({ item }) => {

              return (
                <Image
                  style={styles.galleryImage}
                  source={item}
                />
              )
            }}
          />
        </View>

      </View>
    );
  }
};

var getPropertyAddress = (claimData) => {

  var address = "";
  if (claimData.prop_address1 !== "" && claimData.prop_address1 != null) {
    address = address + claimData.prop_address1
  }

  if (claimData.prop_address2 !== "" && claimData.prop_address2 != null) {
    address = address + ", " + claimData.prop_address2
  }

  if (claimData.prop_city !== "" && claimData.prop_city != null) {
    address = address + ", \n" + claimData.prop_city
  }

  if (claimData.prop_state !== "" && claimData.prop_state != null) {
    address = address + ", " + claimData.prop_state
  }

  if (claimData.prop_county !== "" && claimData.prop_county != null) {
    address = address + ", " + claimData.prop_county
  }

  if (claimData.prop_state_pincode !== "" && claimData.prop_state_pincode != null) {
    address = address + ", " + claimData.prop_state_pincode
  }

  return address
}

var claimField = (data) => {
  return data == null || data === "" ? "-" : data;
}

var formatDate = (data) => {
  return data == null || data === "" ? "-" : moment(Date(data)).format("MM-DD-yyyy");
}

const styles = StyleSheet.create({

  infoHead: {
    fontSize: 11,
    color: COLORS.secondaryTextColor,
    marginTop: 20
  },

  infoSubhead: {
    fontSize: 14,
    color: COLORS.primaryTextColor,
    marginTop: 4
  },

  infoAddress: {
    fontSize: 13,
    color: COLORS.primaryTextColor,
    marginTop: 6
  },

  recording: {
    fontSize: 13,
    color: COLORS.primaryTextColor,
    marginTop: 6,
    marginStart: 12
  },

  startDrive: {
    fontSize: 12,
    color: COLORS.primaryTextColor,
    marginTop: 10,
    borderColor: COLORS.primaryColorYellow,
    paddingTop: 7,
    paddingBottom: 7,
    paddingStart: 16,
    paddingEnd: 16,
    position: 'absolute',
    color: COLORS.primaryColorYellow,
    borderRadius: 24,
    alignSelf: 'flex-end',
    borderWidth: 1
  },

  galleryImage: {
    width: 70,
    height: 50,
    marginTop: 8,
    marginBottom: 16,
    marginStart: 8
  }

})

export default InspectionDetailsScreen;
