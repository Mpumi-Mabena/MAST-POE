import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Profile: { payment: string } | undefined;
  // Add other screen names and their params here
};

type PaymentMethod = 'credit card' | 'debit card' | 'EFT';

const PaymentScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePayment = (method: PaymentMethod) => {
    Alert.alert('Delivery confirmed!');
    navigation.navigate('Profile', { payment: method });
  };

  const paymentMethods: PaymentMethod[] = ['credit card', 'debit card', 'EFT'];

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Payments</Text>
      <Text style={styles.subText}>How would you like to pay for your meal?</Text>
      
      {paymentMethods.map((method) => (
        <TouchableOpacity
          key={method}
          style={styles.button}
          onPress={() => handlePayment(method)}
          accessibilityLabel={`Pay with ${method}`}
        >
          <Text style={styles.buttonText}>Pay with {method}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  headingText: {
    paddingTop: 40,
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 21,
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;