import { Text, View } from 'react-native'

import React from 'react'
import { store } from './redux/store';
import { Provider } from 'react-redux';
import HomeScreen from './screens/homeScreen/homeScreen';

function App() {

  return (
    <Provider store={store}>

      <HomeScreen />

    </Provider>
  )

}

export default App