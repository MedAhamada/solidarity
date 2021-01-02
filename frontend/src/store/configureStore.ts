/**
 * Create the store with dynamic reducers
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

import createReducer from './reducers';
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import {routerMiddleware} from "connected-react-router";
import history from "../utils/history";
import rootSaga from './sagas';

export default function configureAppStore(preloadedState = {}) {

  const persistConfig = {
    key: 'root',
    whitelist: [],
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, createReducer);

  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        // see https://github.com/rt2zz/redux-persist/issues/988#issuecomment-529575333 to ignore actions for serializable check
        ignoredActions: [PERSIST],
      },
    }),
    routerMiddleware(history),
    sagaMiddleware,
  ];

  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    middleware,
    reducer: persistedReducer,
    preloadedState,
  });


  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => {
      import('./reducers').then(() => store.replaceReducer(persistedReducer));
    });
  }

  return { store, persistor };
}
