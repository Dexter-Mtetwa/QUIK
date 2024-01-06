// src/screens/MainScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Platform, TextInput } from 'react-native';
import Colors from '../constants/Colors';
import VAlues from '../constants/Values';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import MaterialIcons

const MainScreen = ({ navigation }) => {
  const services = [
    { name: "Ride", icon: "directions-car" },
    { name: "Food", icon: "restaurant" },
    { name: "Delivery", icon: "local-shipping" },
    { name: "Bills", icon: "attach-money" },
    { name: "Shop", icon: "shopping-basket" },
  ];

  const [searchText, setSearchText] = useState('');

  const screenWidth = Dimensions.get('window').width;
  const buttonWidth = (screenWidth - 80) / 3; // 80 is the total horizontal margin (20 margin on each side of the container)
  const buttonWidth2 = (screenWidth / 2.5);

  const buttonStyle = {
    width: buttonWidth,
    height: buttonWidth,
    backgroundColor: Colors.PRIMARY_COLOR,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  };

  const buttonStyle2 = {
    width: buttonWidth2,
    height: buttonWidth,
    backgroundColor: Colors.PRIMARY_COLOR,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Pay Circle View */}
        <View style={styles.payCircle}>
          {/* You can add more content here if needed */}
        </View>
        <Text style={styles.headingText}>Quik</Text>
        {/* More Circle View */}
        <View style={styles.moreCircle}>
          {/* You can add more content here if needed */}
        </View>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      {/* Services Container */}
      <View style={styles.servicesContainer}>
        <Text style={styles.servicesTxt}>Services</Text>

        {/* Group 1 */}
        <View style={styles.btnContainer}>
          {services.slice(0, 3).map((service, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('ServiceDetails', { serviceName: service.name })}
              style={buttonStyle}
            >
              <>
                <Icon name={service.icon} size={30} color={'red'} />
                <Text style={{ color: Colors.BLACK, textAlign: 'center', fontSize: 16 }}>{service.name}</Text>
              </>
            </TouchableOpacity>
          ))}
        </View>

        {/* Group 2 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
          {services.slice(3).map((service, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('ServiceDetails', { serviceName: service.name })}
              style={buttonStyle2}
            >
              <>
                <Icon name={service.icon} size={30} color={'blue'} />
                <Text style={{ color: Colors.BLACK, textAlign: 'center', fontSize: 16 }}>{service.name}</Text>
              </>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Services Container */}
      <Text style={styles.mapTxt}>Your Current Location</Text>
      <View style={styles.mapContainer}>
        <Text style={styles.bookRideTxt}>Book a ride</Text>
        <TextInput
          style={styles.currentLocationInput}
          placeholder="Select Current Location"
        />
        <TouchableOpacity style={styles.dropoffBtn}>
          <Text style={styles.dropoffTxt}>Select Dropoff Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_COLOR, // Change to a light shade of gray
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.SECONDARY_COLOR,
  },
  moreCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'orange', // Change color as needed
  },
  payCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'green', // Change color as needed
  },
  searchBar: {
    height: 40,
    backgroundColor: Colors.PRIMARY_COLOR,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  servicesContainer: {
    marginTop: 5,
    paddingHorizontal: 20,
  },
  servicesTxt: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: VAlues.LITTLE_MARGINS,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  mapContainer: {
    padding: 20,
    marginTop: VAlues.topMargin / 4,
    backgroundColor: Colors.PRIMARY_COLOR,
    marginHorizontal: VAlues.horizontalMargin,
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 4, // Adjust this elevation value as needed
      },
      android: {
        elevation: 4, // Adjust this elevation value as needed
      },
    }),
  },
  mapTxt: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: VAlues.LITTLE_MARGINS / 2,
  },
  bookRideTxt: {
    fontSize: 20,
    marginBottom: VAlues.topMargin / 2,
  },
  currentLocationInput: {
    height: 40,
    backgroundColor: Colors.LIGHTER_GREY,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  dropoffBtn: {
    width: '100%',
    backgroundColor: Colors.SECONDARY_COLOR,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: VAlues.headerTxtSize,
  },
  dropoffTxt: {
    color: Colors.PRIMARY_COLOR,
  },
});

export default MainScreen;
