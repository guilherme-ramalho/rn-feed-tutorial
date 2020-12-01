import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './screens/Home';

import './config/ReactotronConfig';

const App = () => {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
};

export default App;
