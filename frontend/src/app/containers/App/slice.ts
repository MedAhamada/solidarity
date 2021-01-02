import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the App container
export const initialState: ContainerState = {
  currentUser: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: appActions, reducer, name: sliceKey } = appSlice;
