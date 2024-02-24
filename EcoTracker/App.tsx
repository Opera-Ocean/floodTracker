import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ScreenNavigator from './App/Navigation/stack';

function App() {

  return (
      <NavigationContainer>
            <ScreenNavigator />
      </NavigationContainer>
  );
}

export default App;
