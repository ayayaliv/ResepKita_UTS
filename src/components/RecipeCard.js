import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme';
import { formatRupiah } from '../data/recipes';

export default function RecipeCard({ recipe, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.emojiBox}>
        <Text style={styles.emoji}>{recipe.emoji}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{recipe.name}</Text>
        <Text style={styles.desc} numberOfLines={1}>{recipe.desc}</Text>
        <View style={styles.row}>
          <Text style={styles.tag}>⏱ {recipe.time} mnt</Text>
          <Text style={[styles.tag, styles.cost]}>{formatRupiah(recipe.cost)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', backgroundColor: colors.card, borderRadius: 16,
    padding: 12, marginBottom: 12, elevation: 2,
    shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 6, shadowOffset: { width: 0, height: 2 },
  },
  emojiBox: {
    width: 64, height: 64, borderRadius: 14, backgroundColor: colors.background,
    alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  emoji: { fontSize: 34 },
  info: { flex: 1, justifyContent: 'center' },
  name: { fontSize: 16, fontWeight: '700', color: colors.text },
  desc: { fontSize: 12, color: colors.muted, marginVertical: 2 },
  row: { flexDirection: 'row', marginTop: 4 },
  tag: { fontSize: 12, color: colors.muted, marginRight: 12 },
  cost: { color: colors.accent, fontWeight: '700' },
});