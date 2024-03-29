import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';
import { Provider } from "react-redux";
import store, { persistor } from "store/store";

import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
import { PersistGate } from 'redux-persist/lib/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
        </ThemeProvider>
        </PersistGate>
    </Provider>
  </React.StrictMode>
);
