import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Login container
export const initialState: ContainerState = {
  accessToken: null,
};

type LoginPayload = {
  username: string;
  password: string;
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    postLogin(state: ContainerState, action: PayloadAction<LoginPayload>) {
      return state;
    },
    setAccessToken(state: ContainerState, action: PayloadAction<string>) {
      state.accessToken = action.payload;
      return state;
    },
    logout(state: ContainerState, action: PayloadAction<any>) {
      state.accessToken = null;
      return state;
    },
  },
});

export const { actions: loginActions, reducer, name: sliceKey } = loginSlice;
