import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from '@/library/useCachedResources';
import Navigation from './navigation/Navigation';
import AppLoading from 'expo-app-loading';

export default function App() {
  const cachedResourcesLoaded = useCachedResources();

  if (!cachedResourcesLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style="dark" />
      </SafeAreaProvider>
    );
  }
}
