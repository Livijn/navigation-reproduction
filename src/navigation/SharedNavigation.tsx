import * as React from 'react';
import UserProfileScreen from '@/screens/UserProfileScreen';
import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { TypedNavigator } from '@react-navigation/native';

export type SharedParamList = {
  UserProfile: { username: string };
};

export type SharedScreenProps<Screen extends keyof SharedParamList> =
  NativeStackScreenProps<SharedParamList, Screen>;

export default function getSharedNavigation(
  Stack: TypedNavigator<
    SharedParamList,
    any,
    NativeStackNavigationOptions,
    any,
    any
  >
) {
  return [
    <Stack.Screen
      key="UserProfile"
      name="UserProfile"
      component={UserProfileScreen}
      options={({ route }) => ({
        headerTitle: route.params.username,
        headerShadowVisible: false,
      })}
    />,
  ];
}
