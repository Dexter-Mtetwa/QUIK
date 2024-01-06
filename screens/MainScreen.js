// src/screens/MainScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/Colors';
import VAlues from '../constants/Values';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the specific icon you want to use

const MainScreen = ({ navigation }) => {
  const services = [
    { name: "Ride", icon: "car" },
    { name: "Food", icon: "cutlery" },
    { name: "Delivery", icon: "truck" },
    { name: "Bills", icon: "money" },
    { name: "Shop", icon: "shopping-bag" },
  ];

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
      <Text style={styles.headingText}>Quik</Text>
      {/* Add your elegant search bar here */}

      {/* Services Container */}
      <View style={styles.servicesContainer}>
        <Text style={styles.servicesTxt}>Services</Text>

        {/* Group 1 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 10 }}>
          {services.slice(0, 3).map((service, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('ServiceDetails', { serviceName: service.name })}
              style={buttonStyle}
            >
              <Icon name={service.icon} size={30} color={Colors.BLACK} />
              <Text style={{ color: Colors.BLACK, textAlign: 'center', fontSize: 16 }}>{service.name}</Text>
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
              <Icon name={service.icon} size={30} color={Colors.BLACK} />
              <Text style={{ color: Colors.BLACK, textAlign: 'center', fontSize: 16 }}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Services Container */}
      <View style={styles.mapContainer}>
        <Text style={styles.mapTxt}>Your Current Location</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    flex: 1,
  },
  headingText: {
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 40,
    fontWeight: 'bold',
    color: Colors.SECONDARY_COLOR,
  }, 
  servicesContainer: {
    marginTop: 5,
    paddingHorizontal: 20,
  },
  servicesTxt: { 
    fontSize: 20,
    marginBottom: 10,
  },
  mapContainer: {
    marginTop: VAlues.topMargin,
    backgroundColor: Colors.PRIMARY_COLOR,
    marginHorizontal: VAlues.horizontalMargin,
    borderRadius: 5,
    height: '35%',
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
    color: Colors.BLACK,
    textAlign: 'center',
    fontSize: 16,
    marginTop: VAlues.LITTLE_MARGINS,
  }
});

export default MainScreen;
