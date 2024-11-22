import React from 'react';
import { View, Text, Button, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

// Global variable example
const categories = ["Appetizers", "Main Course", "Desserts"];
const specialOffers = [
  { id: 1, uri: 'VillaVita/Images/Dish.jpg' },
  { id: 2, uri: 'VillaVita/Images/Dish2.jpg' },
];
const popularDishes = [
  { id: 1, uri: 'VillaVita/Images/Dish1.jpg' },
  { id: 2, uri: 'VillaVita/Images/Dish2.webp' },
];

// Function to create a button for each category
const renderCategories = () => {
  return categories.map((category, index) => (
    <Button key={index} title={category} onPress={() => {}} />
  ));
};

// Function to render images
const renderImages = (items: { id: number; uri: string }[]) => {
  return items.map((item) => (
    <Image key={item.id} source={{ uri: item.uri }} style={styles.itemImage} />
  ));
};

const HomeScreen: React.FC = () => {
  // Example of using a loop
  const renderSpecialOffers = () => {
    return specialOffers.map((offer) => (
      <Image key={offer.id} source={{ uri: offer.uri }} style={styles.featuredItem} />
    ));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: 'VillaVita/Images/logo.jpg' }} style={styles.logo} />
        <Text style={styles.welcome}>Welcome to [VillaVita App]</Text>
      </View>

      {/* Search bar */}
      <TextInput style={styles.search} placeholder="Search for dishes..." />

      {/* Featured Items / Promotions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Special Offers</Text>
        <ScrollView horizontal>{renderSpecialOffers()}</ScrollView>
      </View>

      {/* Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal>{renderCategories()}</ScrollView>
      </View>

      {/* Popular Items */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Dishes</Text>
        <ScrollView horizontal>{renderImages(popularDishes)}</ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  search: {
    marginVertical: 20,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featuredItem: {
    width: 150,
    height: 100,
    marginRight: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
});

export default HomeScreen;
