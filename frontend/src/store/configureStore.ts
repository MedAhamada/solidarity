/**
 * Create the store with dynamic reducers
 */

import {
  configureStore,
  getDefaultMiddleware,
  Middleware,
} from '@reduxjs/toolkit';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';

import { createReducer } from './reducers';

export function configureAppStore(history?: History, preloadedState = {}) {
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
  };
  const persistedReducer = persistReducer(persistConfig, createReducer());

  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware] as Middleware[];
  if (history) {
    middlewares.push(routerMiddleware(history));
  }

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: persistedReducer,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: {
          // see https://github.com/rt2zz/redux-persist/issues/988#issuecomment-529575333 to ignore actions for serializable check
          ignoredActions: [PERSIST],
        },
      }),
      ...middlewares,
    ],
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    enhancers,
  });
  const persistor = persistStore(store);

  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => {
      import('./reducers').then(() => store.replaceReducer(persistedReducer));
    });
  }
  return { store, persistor };
}
