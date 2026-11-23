import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme';

export default function RecipeCard({ recipe, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={recipe.image} style={styles.photo} />
      <View style={styles.info}>
        <View style={styles.nameRow}>
          <Text style={styles.name} numberOfLines={1}>{recipe.name}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{recipe.level}</Text>
          </View>
        </View>
        <Text style={styles.desc} numberOfLines={1}>{recipe.desc}</Text>
        <View style={styles.row}>
          <Text style={styles.tag}>⏱ {recipe.time} mnt</Text>
          <Text style={[styles.tag, styles.category]}>{recipe.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', backgroundColor: colors.card, borderRadius: 16,
    padding: 12, marginBottom: 12, elevation: 2,
    shadowColor: colors.text, shadowOpacity: 0.08, shadowRadius: 6, shadowOffset: { width: 0, height: 2 },
  },
  photo: { width: 76, height: 76, borderRadius: 14, marginRight: 12, backgroundColor: colors.background },
  info: { flex: 1, justifyContent: 'center' },
  nameRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  name: { flex: 1, marginRight: 8, fontSize: 16, fontWeight: '700', color: colors.text },
  badge: { backgroundColor: colors.secondary, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
  badgeText: { fontSize: 10, fontWeight: '700', color: colors.text },
  desc: { fontSize: 12, color: colors.muted, marginVertical: 2 },
  row: { flexDirection: 'row', marginTop: 4 },
  tag: { fontSize: 12, color: colors.muted, marginRight: 12 },
  category: { color: colors.accent, fontWeight: '700' },
});