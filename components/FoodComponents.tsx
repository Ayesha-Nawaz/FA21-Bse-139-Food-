import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import CustomHookApi from './CustomHookApi';

const PizzaComponents = ({ selectedCategory }) => {
  const urllist = {
    baseURL: "https://simple-grocery-store-api.online",
    productslist: "/products",
  };

  const url = urllist.baseURL + urllist.productslist;
  const { data, loading, error } = CustomHookApi(url);

  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (!data || data.length === 0) {
    return <Text>No products available.</Text>;
  }

  // Filter products based on selected category and search query
  const filteredData = data.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemBox}>
      <View style={styles.itemContainer}>
        <Image 
          source={{ uri: item.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4xExZTgxfq82CxlScW0z6dyEw21kwAfQEQ&s' }} // Use product image or a placeholder
          style={styles.image} 
        />
        <Text style={styles.name}>{item.name}</Text>
        {item.price && <Text style={styles.price}>${item.price.toFixed(2)}</Text>} 
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={setSearchQuery} // Update search query on change
      />
      {filteredData.length > 0 ? (
        <FlatList
          numColumns={2}
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
        />
      ) : (
        <Text>No matching products found.</Text> // Message when no products match search
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  itemBox: {
    width: 150,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    alignItems: "center",
  },
  itemContainer: {
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  price: {
    fontSize: 20,
    color: "#333333",
  },
});

export default PizzaComponents;
