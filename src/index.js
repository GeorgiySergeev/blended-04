import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';
import { Provider } from "react-redux";
import store from "store/store";

import { App } from 'components';
import { GlobalStyles, theme } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
