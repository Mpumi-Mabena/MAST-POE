import React, { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker"; // Updated import

interface MenuItem {
  name: string;
  price: number;
  description: string;
}

const MenuScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const starters: MenuItem[] = [
    { name: "Buffalo Wild Wings", price: 79.99, description: "Crispy chicken wings tossed in spicy buffalo sauce, served with a side of ranch dip." },
    { name: "Vegetarian Starter", price: 69.99, description: "A selection of fresh and vibrant vegetables, served with hummus and herb dips." },
    { name: "Garlic Bread", price: 39.99, description: "Toasted bread infused with garlic and butter, served warm and crispy." },
  ];

  const dishes: MenuItem[] = [
    { name: "Pizza", price: 229.99, description: "A classic Italian pizza topped with fresh ingredients and melted cheese." },
    { name: "Peppercorn Steak with Sauce and Fries", price: 459.99, description: "Tender steak grilled to perfection, served with creamy peppercorn sauce and crispy fries." },
    { name: "Grilled Chicken Salad", price: 189.99, description: "Fresh greens topped with grilled chicken, cherry tomatoes, and a light vinaigrette." },
    { name: "Vegetable Stir Fry", price: 159.99, description: "A colorful mix of vegetables stir-fried in a savory sauce." },
  ];

  const drinks: MenuItem[] = [
    { name: "Fanta Orange", price: 29.99, description: "Refreshing orange soda with a fizzy kick and a fruity twist." },
    { name: "Sprite", price: 29.99, description: "A crisp and bubbly lemon-lime soda, perfect for any meal." },
    { name: "Coke", price: 29.99, description: "Classic Coca-Cola with its signature bold flavor." },
    { name: "Still Water", price: 19.99, description: "Pure and refreshing still water." },
    { name: "Sparkling Water", price: 24.99, description: "Bubbly and crisp sparkling water, perfect for any occasion." },
  ];

  const desserts: MenuItem[] = [
    { name: "Baklava Dessert", price: 109.99, description: "A traditional pastry layered with nuts and sweetened with honey or syrup." },
    { name: "Churros", price: 89.99, description: "Fried dough sticks rolled in cinnamon sugar, served warm and delicious." },
    { name: "Chocolate Brownie", price: 99.99, description: "Rich and gooey chocolate brownie topped with a scoop of vanilla ice cream." },
    { name: "Ice Cream Sundae", price: 79.99, description: "Scoops of creamy ice cream topped with chocolate sauce, whipped cream, and a cherry." },
  ];

  const kidsMeals: MenuItem[] = [
    { name: "Kids Mini Pizza", price: 49.99, description: "A smaller version of our classic pizza, topped with cheese and your choice of toppings." },
    { name: "Chicken Nuggets & Fries", price: 54.99, description: "Crispy chicken nuggets served with a side of golden fries and ketchup." },
    { name: "Mac & Cheese", price: 59.99, description: "Creamy macaroni and cheese, topped with a sprinkle of cheddar." },
    { name: "Mini Burger", price: 64.99, description: "A kid-sized beef burger served with lettuce, tomato, and fries on the side." },
    { name: "Grilled Cheese Sandwich", price: 44.99, description: "Warm and gooey grilled cheese sandwich, served with a handful of chips." },
    { name: "Hot Dog", price: 49.99, description: "A classic hot dog served in a soft bun with your choice of ketchup or mustard." },
    { name: "Spaghetti Bolognese", price: 59.99, description: "A kid-friendly portion of spaghetti in a hearty tomato and meat sauce." },
  ];

  const kidsDrinks: MenuItem[] = [
    { name: "Chocolate Milk", price: 29.99, description: "A rich and creamy chocolate-flavored milk drink, perfect for kids." },
    { name: "Apple Juice", price: 19.99, description: "Fresh and sweet apple juice with no added sugars." },
    { name: "Orange Juice", price: 19.99, description: "Refreshing orange juice, packed with vitamin C." },
    { name: "Strawberry Milkshake", price: 34.99, description: "A sweet and creamy milkshake with a burst of strawberry flavor." },
    { name: "Kids Fizzy Drink", price: 24.99, description: "A smaller portion of fizzy drink options like cola or lemon-lime soda, tailored for kids." },
  ];

  const allItems = [
    { category: "Starters", items: starters },
    { category: "Dishes", items: dishes },
    { category: "Drinks", items: drinks },
    { category: "Desserts", items: desserts },
    { category: "Kids Meals", items: kidsMeals },
    { category: "Kids Drinks", items: kidsDrinks },
  ];

  const filterItems =
    selectedCategory === "All"
      ? allItems.flatMap((itemGroup) => itemGroup.items)
      : allItems.find((itemGroup) => itemGroup.category === selectedCategory)?.items || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue: string) => setSelectedCategory(itemValue)} // Explicit typing
        style={styles.picker}
      >
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Dishes" value="Dishes" />
        <Picker.Item label="Drinks" value="Drinks" />
        <Picker.Item label="Desserts" value="Desserts" />
        <Picker.Item label="Kids Meals" value="Kids Meals" />
        <Picker.Item label="Kids Drinks" value="Kids Drinks" />
      </Picker>

      <ScrollView>
        {filterItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.buttonText}>{`${item.name} - R${item.price.toFixed(2)}`}</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  descriptionText: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});

export default MenuScreen;
