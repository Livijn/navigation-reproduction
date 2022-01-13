import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import * as React from 'react';
import { RootStackParamList } from '@/navigation/RootStackNavigator';
import { SharedParamList } from '@/navigation/SharedNavigation';
import EmptyScreen from '@/screens/EmptyScreen';
import UserProfileScreen from '@/screens/UserProfileScreen';
import UserButtons from '@/navigation/UserButtons';

export type HomeStackParamList = SharedParamList & {
  HomeFeed: undefined;
};

export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> =
  NativeStackScreenProps<HomeStackParamList & RootStackParamList, Screen>;

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeFeed"
        component={EmptyScreen}
        options={{
          headerRight: () => <UserButtons />,
        }}
      />

      <HomeStack.Screen
        key="UserProfile"
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          title: 'UserProfile (Home)',
        }}
      />
    </HomeStack.Navigator>
  );
}
