import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { tw } from '@/library/tailwind';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={tw('flex-1 justify-center items-center')}>
      <TouchableOpacity
        style={tw('bg-green-200 p-2')}
        onPress={() => {
          navigation.navigate('Tabs');
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
