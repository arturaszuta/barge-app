import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import LandingPage from './screens/LandingPage';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  //?
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
         //<Navigation colorScheme={colorScheme} />
         //<StatusBar />
      <SafeAreaProvider>
        <LandingPage />
      </SafeAreaProvider>
    );
  }
}
