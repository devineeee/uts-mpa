import React from "react";
import {View, ScrollView} from 'react-native';
import Navigation from "./Navigation";

const App = () => {
  return (
    <View>
      <ScrollView>
        <Navigation />
      </ScrollView>
    </View>
  );
};

export default App;