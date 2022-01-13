import * as React from 'react';
import { View } from 'react-native';
import UserButtons from '@/navigation/UserButtons';
import { tw } from '@/library/tailwind';

export default function EmptyScreen() {
  return (
    <View style={tw('p-10')}>
      <UserButtons />
    </View>
  );
}
