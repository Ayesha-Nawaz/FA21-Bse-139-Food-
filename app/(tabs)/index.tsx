import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Navbar from '../../components/Navbar';
import PizzaComponents from '@/components/FoodComponents';

export default function TabOneScreen() {
  // State to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar onSelectCategory={setSelectedCategory} />
      <PizzaComponents selectedCategory={selectedCategory} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9dedb',
  },
});
