import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';
import { formatRupiah } from '../data/recipes';
import { colors } from '../theme';

export default function RecipeDetailScreen({ route }) {
  const { recipe } = route.params; 
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(recipe.id);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <View style={styles.header}>
        <Text style={styles.emoji}>{recipe.emoji}</Text>
        <Text style={styles.name}>{recipe.name}</Text>
        <Text style={styles.meta}>
          ⏱ {recipe.time} menit  •  {formatRupiah(recipe.cost)}  •  {recipe.level}
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.favButton, fav && styles.favActive]}
        onPress={() => toggleFavorite(recipe.id)}
      >
        <Ionicons
          name={fav ? 'heart' : 'heart-outline'}
          size={20}
          color={fav ? '#fff' : colors.primary}
        />
        <Text style={[styles.favText, fav && { color: '#fff' }]}>
          {fav ? 'Hapus dari Favorit' : 'Simpan ke Favorit'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.section}>Bahan-bahan</Text>
      {recipe.ingredients.map((item, i) => (
        <Text key={i} style={styles.item}>• {item}</Text>
      ))}

      <Text style={styles.section}>Cara Membuat</Text>
      {recipe.steps.map((step, i) => (
        <Text key={i} style={styles.item}>{i + 1}. {step}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { alignItems: 'center', marginBottom: 16 },
  emoji: { fontSize: 80 },
  name: { fontSize: 24, fontWeight: '800', color: colors.text, marginTop: 8 },
  meta: { color: colors.muted, marginTop: 4 },
  favButton: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    borderWidth: 1.5, borderColor: colors.primary, borderRadius: 24, paddingVertical: 10, marginBottom: 8,
  },
  favActive: { backgroundColor: colors.primary },
  favText: { color: colors.primary, fontWeight: '700', marginLeft: 8 },
  section: { fontSize: 18, fontWeight: '800', color: colors.primary, marginTop: 16, marginBottom: 8 },
  item: { fontSize: 15, color: colors.text, marginBottom: 6, lineHeight: 22 },
});