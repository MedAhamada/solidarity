/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
import { RootState } from '../types';
import history from 'utils/history';
import { connectRouter } from 'connected-react-router';

export default combineReducers<RootState>({
  router: connectRouter(history),
});
