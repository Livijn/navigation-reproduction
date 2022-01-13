import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import * as React from 'react';
import UserButtons from '@/navigation/UserButtons';
import { RootStackParamList } from '@/navigation/RootStackNavigator';
import getSharedNavigation, {
  SharedParamList,
} from '@/navigation/SharedNavigation';
import EmptyScreen from '@/screens/EmptyScreen';

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

      {getSharedNavigation(HomeStack as any)}
    </HomeStack.Navigator>
  );
}
