import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const imageUri = 'https://BurgerLabs/ours.jpg';  // Replace with your actual image URL

const AboutUsScreen: React.FC = ({ navigation }: any) => {
  return (
    <View>
      <ImageBackground source={{ uri: imageUri }} resizeMode="cover" style={styles.image}>
        <Text style={styles.welcomeText}>About Us</Text>
        <Text style={styles.headingText}>Our Story</Text>
        <Text style={styles.bodyText}>
          Christofal's Cuisine started out as a small family business...
        </Text>
        <Text style={styles.headingText}>Our Mission</Text>
        <Text style={styles.bodyText}>We intend to create amazing meals for everyone...</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 40,
    color: 'white',
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    paddingTop: 20,
  },
  bodyText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    padding: 10,
  },
});

export default AboutUsScreen;
