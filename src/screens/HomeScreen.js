import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';
import { useAuth } from '../context/AuthContext';
import { colors } from '../theme';

export default function HomeScreen({ navigation }) {
  const { user } = useAuth();
  const firstName = user ? user.name.split(' ')[0] : '';

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        ListHeaderComponent={
          <View style={styles.banner}>
            <Text style={styles.bannerTitle}>Halo, {firstName}! 👋</Text>
            <Text style={styles.bannerText}>
              Mau masak apa hari ini? Semua resep di bawah ini di bawah Rp 15.000.
            </Text>
            <View style={styles.pill}>
              <Text style={styles.pillText}>💰 Hemat • Mudah • Cepat</Text>
            </View>
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
  bannerTitle: { color: colors.white, fontSize: 20, fontWeight: '800' },
  bannerText: { color: colors.white, marginTop: 4 },
  pill: { alignSelf: 'flex-start', backgroundColor: colors.secondary, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginTop: 10 },
  pillText: { color: colors.text, fontWeight: '700', fontSize: 12 },
});