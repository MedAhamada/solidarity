/**
 *
 * App
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  useInjectReducer,
  useInjectSaga,
} from '../../../utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectApp } from './selectors';
import { appSaga } from './saga';
import { Helmet } from 'react-helmet-async';
import { Container } from '@material-ui/core';
import Header from '../../components/Header';
import { GlobalStyle } from '../../../styles/global-styles';

interface Props {}

export const App: React.FC<Props> = props => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: appSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const app = useSelector(selectApp);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet titleTemplate="Solidarity" defaultTitle="Solidarity">
        <meta name="description" content="Solidarity" />
      </Helmet>

      <Container maxWidth="xl">
        <Header />
        <div>{props.children}</div>
      </Container>
      <GlobalStyle />
    </>
  );
};
