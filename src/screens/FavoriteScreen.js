import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { useFavorites } from '../context/FavoritesContext';
import { recipes } from '../data/recipes';
import { colors } from '../theme';

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useFavorites();
  const favRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <View style={styles.container}>
      <FlatList
        data={favRecipes}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyEmoji}>💔</Text>
            <Text style={styles.empty}>Belum ada resep favorit.</Text>
            <Text style={styles.empty}>Buka detail resep lalu tekan "Simpan ke Favorit".</Text>
          </View>
        }
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  emptyBox: { alignItems: 'center', marginTop: 80 },
  emptyEmoji: { fontSize: 56 },
  empty: { color: colors.muted, textAlign: 'center', marginTop: 6 },
});