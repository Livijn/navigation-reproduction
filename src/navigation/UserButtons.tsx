import * as React from 'react';
import { tw } from '@/library/tailwind';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function UserButtons() {
  const navigation = useNavigation();

  return (
    <View style={tw('flex-row items-center')}>
      <TouchableOpacity
        style={tw('mr-4')}
        onPress={() => {
          navigation.navigate('UserProfile', { username: 'some profile' });
        }}
      >
        <Text>Go</Text>
      </TouchableOpacity>
    </View>
  );
}
