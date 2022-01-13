import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  RedHatDisplay_400Regular,
  RedHatDisplay_500Medium,
  RedHatDisplay_700Bold,
  RedHatDisplay_900Black,
} from '@expo-google-fonts/red-hat-display';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          RedHatDisplay_400Regular,
          RedHatDisplay_500Medium,
          RedHatDisplay_700Bold,
          RedHatDisplay_900Black,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        await SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
