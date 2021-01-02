/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Use consistent styling
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'app';

// Initialize languages
import './locales/i18n';
import configureStore from 'store/configureStore';

export const { store, persistor } = configureStore();

const rootEl = document.getElementById('root');

if (rootEl) {
  ReactDOM.render(<App store={store} persistor={persistor} />, rootEl);
}

if (module.hot) {
  module.hot.accept('./app', () => {
        const NextApp = require('./app').default; // eslint-disable-line
    if (rootEl) {
      ReactDOM.render(<NextApp store={store} persistor={persistor} />, rootEl);
    }
  });
}
