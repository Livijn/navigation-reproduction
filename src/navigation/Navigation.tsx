import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { getColor } from '@/library/tailwind';
import RootStackNavigator from '@/navigation/RootStackNavigator';

export default function Navigation() {
  return (
    <NavigationContainer
      theme={{
        dark: false,
        colors: {
          primary: getColor('gray-800'),
          background: 'rgb(255, 255, 255)',
          card: 'rgb(255, 255, 255)',
          text: getColor('black'),
          border: 'transparent',
          notification: 'rgb(255, 59, 48)',
        },
      }}
    >
      <RootStackNavigator />
    </NavigationContainer>
  );
}
