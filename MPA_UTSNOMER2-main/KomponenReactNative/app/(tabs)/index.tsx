import React from "react";
import {View, ScrollView} from 'react-native';
import KomponenFungsional from "./KomponenFungsional";
import KomponenBerbasisKelas from "./KomponenBerbasisKelas";

const App = () => {
  return (
    <View>
      <ScrollView>
        <KomponenFungsional />
        <KomponenBerbasisKelas />
      </ScrollView>
    </View>
  );
};

export default App;