import React from 'react';
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const LayarPertama = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Go to Second Screen"
        onPress={() => navigation.navigate('LayarKedua')}
      />
    </View>
  );
};

const LayarKedua = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is the Second Screen</Text>
    </View>
  );
};

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="LayarPertama">
      <Stack.Screen
        name="LayarPertama"
        component={LayarPertama}
        options={{ title: 'Layar Pertama' }}
      />
      <Stack.Screen
        name="LayarKedua"
        component={LayarKedua}
        options={{ title: 'Layar Kedua' }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;