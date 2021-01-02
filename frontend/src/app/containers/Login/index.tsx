/**
 *
 * Login
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, loginActions } from './slice';
import { selectLogin } from './selectors';
import { loginSaga } from './saga';
import LoginForm from '../../components/LoginForm/LoginForm.component';

interface Props {}

export function Login(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = useSelector(selectLogin);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <Div>
        <h1>My App</h1>
        <p>This can be anywhere in your application access={login.accessToken}</p>
        <LoginForm  message="Login" />
        <button onClick={() => {dispatch(loginActions.postLogin({username: 'med@med.med', password: 'password'}))}}>Click</button>
      </Div>
    </>
  );
}

const Div = styled.div``;
