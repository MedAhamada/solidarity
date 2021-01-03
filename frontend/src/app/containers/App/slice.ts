import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the App container
export const initialState: ContainerState = {
  currentUser: null,
  error: null,
  loading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<any>) {
      state.currentUser = action.payload;
      return state;
    },
    setAppLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
      return state;
    },
    setAppError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      return state;
    },
  },
});

export const { actions: appActions, reducer, name: sliceKey } = appSlice;
