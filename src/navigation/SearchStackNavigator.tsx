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

export type SearchStackParamList = SharedParamList & {
  SearchBrowse: undefined;
  SearchResultsScreen: undefined;
};

export type SearchStackScreenProps<Screen extends keyof SearchStackParamList> =
  NativeStackScreenProps<SearchStackParamList & RootStackParamList, Screen>;

const SearchStack = createNativeStackNavigator<SearchStackParamList>();

export default function SearchStackNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchBrowse"
        component={EmptyScreen}
        options={{
          headerRight: () => <UserButtons />,
        }}
      />

      <SearchStack.Screen
        key="UserProfile"
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          title: 'UserProfile (Search)',
        }}
      />
    </SearchStack.Navigator>
  );
}
