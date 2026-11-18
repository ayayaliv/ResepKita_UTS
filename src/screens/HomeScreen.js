import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';
import { colors } from '../theme';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        ListHeaderComponent={
          <View style={styles.banner}>
            <Text style={styles.bannerTitle}>Halo, Sobat Kita! 👋</Text>
            <Text style={styles.bannerText}>
              Mau masak apa hari ini? Semua resep di bawah ini di bawah Rp 10.000.
            </Text>
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
  container: { flex: 1, backgroundColor: colors.background },
  banner: { backgroundColor: colors.primary, borderRadius: 16, padding: 16, marginBottom: 16 },
  bannerTitle: { color: '#fff', fontSize: 20, fontWeight: '800' },
  bannerText: { color: '#fff', marginTop: 4 },
});