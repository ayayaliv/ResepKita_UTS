import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';
import { colors } from '../theme';

export default function ProfileScreen() {
  const { favorites } = useFavorites();
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>👩‍🍳</Text>
      <Text style={styles.title}>Resep Anak Kost</Text>
      <Text style={styles.sub}>UTS Aplikasi Berbasis Platform</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Resep favorit tersimpan</Text>
        <Text style={styles.value}>{favorites.length}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Dibuat oleh</Text>
        <Text style={styles.name}>Cahya - [NIM]</Text>
        <Text style={styles.name}>Kencana - [NIM]</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', padding: 24 },
  emoji: { fontSize: 70, marginTop: 16 },
  title: { fontSize: 24, fontWeight: '800', color: colors.primary },
  sub: { color: colors.muted, marginBottom: 20 },
  card: { width: '100%', backgroundColor: colors.card, borderRadius: 16, padding: 16, marginBottom: 12 },
  label: { color: colors.muted, marginBottom: 6 },
  value: { fontSize: 32, fontWeight: '800', color: colors.accent },
  name: { fontSize: 16, fontWeight: '600', color: colors.text, marginTop: 2 },
});