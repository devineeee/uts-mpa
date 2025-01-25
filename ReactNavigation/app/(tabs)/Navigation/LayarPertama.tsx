import React from 'react';
import { Button, View } from 'react-native';

const LayarPertama = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Go to Second Screen"
        onPress={() => navigation.navigate('LayarKedua')}/>
    </View>
  );
};

export default LayarPertama;