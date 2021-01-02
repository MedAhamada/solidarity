/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';

import { InjectedReducersType } from 'utils/types/injector-typings';
import { connectRouter, RouterState } from 'connected-react-router';
import history from '../utils/history';
import { appReducer as app } from '../app/containers/App/reducer';
import { reducer as login } from '../app/containers/Login/slice';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  return combineReducers({
    ...injectedReducers,
    router: connectRouter(history) as Reducer<RouterState, AnyAction>,
    app,
    login,
  });
}
