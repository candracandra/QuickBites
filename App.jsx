import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, View, Image } from 'react-native';

const recipes = [
  { id: 1, name: 'Burger Keju', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60' },
  { id: 2, name: 'Pizza Pepperoni', image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60' },
  { id: 3, name: 'Sushi Roll', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60' },
];

// Komponen anak menggunakan props
const RecipeCard = ({ image, title }) => (
  <View style={styles.recipeCard}>
    <Image source={{ uri: image }} style={styles.recipeImage} />
    <Text style={styles.recipeTitle}>{title}</Text>
  </View>
);

const QuickBitesApp = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter berdasarkan search
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
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
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} image={recipe.image} title={recipe.name} />
          ))
        ) : (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>Resep tidak ditemukan</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { alignItems: 'center', backgroundColor: '#f8f8f8', paddingBottom: 16 },
  headerImage: { width: '100%', height: 200, resizeMode: 'cover' },
  title: { fontSize: 28, fontWeight: 'bold', marginTop: 10, color: '#333' },
  searchInput: {
    height: 40, width: '90%', borderColor: '#ccc', borderWidth: 1,
    borderRadius: 8, paddingHorizontal: 10, marginTop: 10, backgroundColor: '#fff',
  },
  content: { padding: 16 },
  subtitle: { fontSize: 20, fontWeight: '600', marginBottom: 8, color: '#555' },
  recipeCard: {
    backgroundColor: '#f9f9f9', borderRadius: 10, padding: 10,
    marginBottom: 10, alignItems: 'center',
  },
  recipeImage: { width: '100%', height: 150, borderRadius: 10, resizeMode: 'cover' },
  recipeTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 8, color: '#333' },
});

export default QuickBitesApp;
