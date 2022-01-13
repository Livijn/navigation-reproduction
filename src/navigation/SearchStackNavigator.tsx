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

      {getSharedNavigation(SearchStack as any)}
    </SearchStack.Navigator>
  );
}
