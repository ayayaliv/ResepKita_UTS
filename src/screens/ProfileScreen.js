import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';
import { useFavorites } from '../context/FavoritesContext';
import { colors } from '../theme';

export default function ProfileScreen() {
  const { user, updatePhoto, logout } = useAuth();
  const { favorites } = useFavorites();
  const [photoError, setPhotoError] = useState(false);

  if (!user) return null; // sesaat setelah keluar

  const pickerOptions = {
    mediaTypes: ['images'],
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.7,
  };

  const handleResult = (result) => {
    if (!result.canceled) {
      setPhotoError(false);
      updatePhoto(result.assets[0].uri);
    }
  };

  const fromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync(pickerOptions);
    handleResult(result);
  };

  const fromCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Izin ditolak', 'Izinkan akses kamera untuk mengambil foto profil.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync(pickerOptions);
    handleResult(result);
  };

  const changePhoto = () => {
    Alert.alert('Foto Profil', 'Pilih sumber foto', [
      { text: 'Kamera', onPress: fromCamera },
      { text: 'Galeri', onPress: fromGallery },
      { text: 'Batal', style: 'cancel' },
    ]);
  };

  const confirmLogout = () => {
    Alert.alert('Keluar', 'Yakin ingin keluar dari ResepKita?', [
      { text: 'Batal', style: 'cancel' },
      { text: 'Keluar', style: 'destructive', onPress: logout },
    ]);
  };

  const showPhoto = user.photo && !photoError;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={changePhoto} activeOpacity={0.8}>
        {showPhoto ? (
          <Image source={{ uri: user.photo }} style={styles.avatar} onError={() => setPhotoError(true)} />
        ) : (
          <View style={[styles.avatar, styles.avatarEmpty]}>
            <Text style={styles.initial}>{user.name.charAt(0).toUpperCase()}</Text>
          </View>
        )}
        <View style={styles.cameraBadge}>
          <Ionicons name="camera" size={16} color={colors.text} />
        </View>
      </TouchableOpacity>
      <Text style={styles.hint}>Ketuk foto untuk mengganti</Text>

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.nim}>NIM {user.nim}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Resep favorit tersimpan</Text>
        <Text style={styles.value}>{favorites.length}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Tentang ResepKita</Text>
        <Text style={styles.teamText}>UTS Aplikasi Berbasis Platform</Text>
        <Text style={styles.teamText}>Dibuat oleh Cahya dan Kencana</Text>
      </View>

      <TouchableOpacity style={styles.logout} onPress={confirmLogout}>
        <Ionicons name="log-out-outline" size={20} color={colors.primary} />
        <Text style={styles.logoutText}>Keluar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { alignItems: 'center', padding: 24 },
  avatar: { width: 110, height: 110, borderRadius: 55 },
  avatarEmpty: { backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  initial: { color: colors.white, fontSize: 44, fontWeight: '800' },
  cameraBadge: {
    position: 'absolute', right: 0, bottom: 0, width: 34, height: 34, borderRadius: 17,
    backgroundColor: colors.secondary, alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: colors.background,
  },
  hint: { color: colors.muted, fontSize: 12, marginTop: 8 },
  name: { fontSize: 24, fontWeight: '800', color: colors.text, marginTop: 12 },
  nim: { color: colors.muted, marginBottom: 20 },
  card: { width: '100%', backgroundColor: colors.card, borderRadius: 16, padding: 16, marginBottom: 12 },
  label: { color: colors.muted, marginBottom: 6 },
  value: { fontSize: 32, fontWeight: '800', color: colors.accent },
  teamText: { fontSize: 15, fontWeight: '600', color: colors.text, marginTop: 2 },
  logout: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%',
    borderWidth: 1.5, borderColor: colors.primary, borderRadius: 24, paddingVertical: 12, marginTop: 8,
  },
  logoutText: { color: colors.primary, fontWeight: '700', marginLeft: 8 },
});