

import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { store } from './redux/store';
import { Provider } from 'react-redux';
import BottomTabNavigator from './navigation/bottomNav';

function App() {

  return (
    <Provider store={store}>

      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>

    </Provider>
  )

}

export default App