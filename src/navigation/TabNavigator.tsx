import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import SearchStackNavigator from '@/navigation/SearchStackNavigator';
import { RootStackParamList } from '@/navigation/RootStackNavigator';
import HomeStackNavigator from './HomeStackNavigator';

export type TabParamList = {
  HomeStack: undefined;
  SearchStack: undefined;
  DogsStack: undefined;
  PlacesStack: undefined;
  ShopStack: undefined;
};

export type TabScreenProps<Screen extends keyof TabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

const BottomTab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <BottomTab.Navigator
      backBehavior="none"
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen name="HomeStack" component={HomeStackNavigator} />
      <BottomTab.Screen name="SearchStack" component={SearchStackNavigator} />
    </BottomTab.Navigator>
  );
}
