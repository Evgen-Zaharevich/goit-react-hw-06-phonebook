import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
// import { persistor } from 'redux/store';

import { GlobalStyle } from './components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <GlobalStyle />
  </React.StrictMode>
);
