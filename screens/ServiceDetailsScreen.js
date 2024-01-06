// src/screens/ServiceDetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const ServiceDetailsScreen = ({ route }) => {
  const { serviceName } = route.params;

  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 20 }}>{serviceName}</Text>
      <Text style={{ fontSize: 18, textAlign: 'center', marginVertical: 20 }}>Details for {serviceName} service</Text>
    </View>
  );
};

export default ServiceDetailsScreen;
