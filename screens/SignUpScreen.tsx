import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

const SignupScreen: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignup = (): void => {
    // Simple validation
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Handle signup logic here, e.g., API call
    Alert.alert('Success', `Signed up with name: ${name}, email: ${email}`);
  };

  return (
    <View style={styles.container}>
      {/* Chef Image */}
      <Image
        source={require('../images/chef.png')}  // Adjust the path to your image
        style={styles.chefImage}
      />
      
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center', // Center elements horizontally
    justifyContent: 'center', // Center elements vertically
  },
  chefImage: {
    width: 150,
    height: 150,
    marginBottom: 20, // Space between image and the rest of the form
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%', // Make the input take the full width
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default SignupScreen;
