import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './screens/Home';

import './config/ReactotronConfig';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#7640e0" barStyle="light-content" />
      <Home />
    </SafeAreaView>
  );
};

export default App;
