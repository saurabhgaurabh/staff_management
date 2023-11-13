import React from 'react';
import { Provider } from 'react-redux'
import { store } from './src/redux/store';
import Main from './src/Screens/Main';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react';
// import messaging from '@react-native-firebase/messaging'



let persistor = persistStore(store);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  },[])

  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
export default App;