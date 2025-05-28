import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, View, Image } from 'react-native';

const recipes = [
  {
    id: 1,
    name: 'Burger Keju',
    image: 'https://source.unsplash.com/800x400/?burger',
  },
  {
    id: 2,
    name: 'Pizza Pepperoni',
    image: 'https://source.unsplash.com/800x400/?pizza',
  },
  {
    id: 3,
    name: 'Sushi Roll',
    image: 'https://source.unsplash.com/800x400/?sushi',
  },
];

const QuickBitesApp = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header dengan Gambar */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://source.unsplash.com/800x400/?food' }}
          style={styles.headerImage}
        />
        <Text style={styles.title}>QuickBites</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari resep..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      {/* Konten */}
      <View style={styles.content}>
        <Text style={styles.subtitle}>Resep Populer</Text>
        {recipes.map((recipe) => (
          <View key={recipe.id} style={styles.recipeCard}>
            <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
            <Text style={styles.recipeTitle}>{recipe.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingBottom: 16,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  searchInput: {
    height: 40,
    width: '90%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#555',
  },
  recipeCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  recipeImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#333',
  },
});

export default QuickBitesApp;
