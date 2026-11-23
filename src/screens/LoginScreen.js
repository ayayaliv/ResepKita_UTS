import React, { useState } from 'react';
import {
  Text, TextInput, TouchableOpacity, KeyboardAvoidingView,
  Platform, ScrollView, StyleSheet,
} from 'react-native';
import { useAuth } from '../context/AuthContext';
import { colors } from '../theme';

export default function LoginScreen() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username.trim() || password.length < 4) {
      setError('Username wajib diisi, kata sandi minimal 4 karakter.');
      return;
    }
    setError('');
    login(username.trim());
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.emoji}>🍳</Text>
        <Text style={styles.title}>Masuk ke ResepKita</Text>
        <Text style={styles.subtitle}>Masukkan username untuk mulai memasak</Text>

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: cahya"
          autoCapitalize="none"
          autoCorrect={false}
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Kata Sandi</Text>
        <TextInput
          style={styles.input}
          placeholder="Minimal 4 karakter"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  container: { padding: 24, paddingTop: 32 },
  emoji: { fontSize: 56, textAlign: 'center' },
  title: { fontSize: 24, fontWeight: '800', color: colors.primary, textAlign: 'center', marginTop: 8 },
  subtitle: { color: colors.muted, textAlign: 'center', marginBottom: 24 },
  label: { fontWeight: '700', color: colors.text, marginBottom: 6 },
  input: {
    backgroundColor: colors.card, borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12,
    marginBottom: 16, borderWidth: 1, borderColor: colors.border,
  },
  error: { color: '#C62828', marginBottom: 12 },
  button: { backgroundColor: colors.primary, paddingVertical: 14, borderRadius: 30, alignItems: 'center', marginTop: 4 },
  buttonText: { color: colors.white, fontSize: 16, fontWeight: '700' },
});