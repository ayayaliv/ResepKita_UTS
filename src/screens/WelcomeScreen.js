import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.emoji}>🍳</Text>
      <Text style={styles.title}>ResepKita</Text>
      <Text style={styles.subtitle}>
        Masak enak, murah, dan gampang. Cukup bahan seadanya!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Mulai Masak</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', padding: 24 },
  emoji: { fontSize: 90 },
  title: { fontSize: 32, fontWeight: '800', color: colors.primary, marginTop: 12 },
  subtitle: { fontSize: 16, color: colors.muted, textAlign: 'center', marginTop: 8, marginBottom: 32 },
  button: { backgroundColor: colors.primary, paddingHorizontal: 40, paddingVertical: 14, borderRadius: 30 },
  buttonText: { color: colors.white, fontSize: 16, fontWeight: '700' },
});