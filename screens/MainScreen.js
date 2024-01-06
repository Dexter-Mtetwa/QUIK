// src/screens/MainScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

const MainScreen = ({ navigation }) => {
  const services = ["Ride", "Food", "Delivery", "Bills", "Shop"];
  const screenWidth = Dimensions.get('window').width;
  const buttonWidth = (screenWidth - 80) / 4; // 80 is the total horizontal margin (20 margin on each side of the container)

  return (
    <View>
      <Text style={{ fontSize: 28, textAlign: 'center', marginVertical: 20 }}>Quik</Text>
      {/* Add your elegant search bar here */}

      {/* Services Container */}
      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Services</Text>

        {/* Group 1 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
          {services.slice(0, 3).map((service, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('ServiceDetails', { serviceName: service })}
              style={{
                width: buttonWidth,
                height: buttonWidth,
                backgroundColor: '#3498db',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>{service}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Group 2 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
          {services.slice(3).map((service, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('ServiceDetails', { serviceName: service })}
              style={{
                width: buttonWidth,
                height: buttonWidth,
                backgroundColor: '#3498db',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>{service}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
