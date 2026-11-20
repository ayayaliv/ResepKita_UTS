import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/context/AuthContext';
import { FavoritesProvider } from './src/context/FavoritesContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <StatusBar style="dark" />
        <AppNavigator />
      </FavoritesProvider>
    </AuthProvider>
  );
}