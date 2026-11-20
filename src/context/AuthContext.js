import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();
const STORAGE_KEY = 'resepkita_user';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSession = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) setUser(JSON.parse(saved));
      } catch (e) {
        console.log('Gagal membaca sesi:', e);
      }
      setLoading(false);
    };
    loadSession();
  }, []);

  const saveUser = async (data) => {
    setUser(data);
    try {
      if (data) await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      else await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.log('Gagal menyimpan sesi:', e);
    }
  };

  const login = (name, nim) => saveUser({ name, nim, photo: null });
  const logout = () => saveUser(null);
  const updatePhoto = (uri) => saveUser({ ...user, photo: uri });

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, updatePhoto }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);