import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, ScrollView, StyleSheet } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import CategoryChip from '../components/CategoryChip';
import { recipes, categories } from '../data/recipes';
import { colors } from '../theme';

export default function ExploreScreen({ navigation }) {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('Semua');

  const filtered = recipes.filter((r) => {
    const matchName = r.name.toLowerCase().includes(keyword.toLowerCase());
    const matchCategory = category === 'Semua' || r.category === category;
    return matchName && matchCategory;
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Cari resep..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <View style={{ height: 48 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((c) => (
            <CategoryChip key={c} label={c} active={c === category} onPress={() => setCategory(c)} />
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.empty}>Resep tidak ditemukan 😢</Text>}
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
  search: {
    backgroundColor: colors.card, borderRadius: 12, paddingHorizontal: 16, paddingVertical: 10,
    marginBottom: 12, borderWidth: 1, borderColor: '#EADBC8',
  },
  empty: { textAlign: 'center', color: colors.muted, marginTop: 40 },
});