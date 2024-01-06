// src/screens/MainScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/Colors';

const MainScreen = ({ navigation }) => {
  const services = ["Ride", "Food", "Delivery", "Bills", "Shop"];
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
    <View>
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
              onPress={() => navigation.navigate('ServiceDetails', { serviceName: service })}
              style={buttonStyle}
            >
              <Text style={{ color: Colors.BLACK, textAlign: 'center', fontSize: 16 }}>{service}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Group 2 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
          {services.slice(3).map((service, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('ServiceDetails', { serviceName: service })}
              style={buttonStyle2}
            >
              <Text style={{ color: Colors.BLACK, textAlign: 'center', fontSize: 16 }}>{service}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default MainScreen;
