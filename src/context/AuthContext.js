import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();
const SESSION_KEY = 'resepkita_session';
const photoKey = (username) => `resepkita_photo_${username.toLowerCase()}`;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSession = async () => {
      try {
        const saved = await AsyncStorage.getItem(SESSION_KEY);
        if (saved) setUser(JSON.parse(saved));
      } catch (e) {
        console.log('Gagal membaca sesi:', e);
      }
      setLoading(false);
    };
    loadSession();
  }, []);

  const saveSession = async (data) => {
    setUser(data);
    try {
      if (data) await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(data));
      else await AsyncStorage.removeItem(SESSION_KEY);
    } catch (e) {
      console.log('Gagal menyimpan sesi:', e);
    }
  };

  const login = async (username) => {
    let photo = null;
    try {
      photo = await AsyncStorage.getItem(photoKey(username));
    } catch (e) {
      console.log('Gagal membaca foto:', e);
    }
    await saveSession({ username, photo, loginAt: new Date().toISOString() });
  };

  const logout = () => saveSession(null);

  const updatePhoto = async (uri) => {
    await saveSession({ ...user, photo: uri });
    try {
      await AsyncStorage.setItem(photoKey(user.username), uri);
    } catch (e) {
      console.log('Gagal menyimpan foto:', e);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, updatePhoto }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);