/**
 *
 * App
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, appActions } from './slice';
import { selectApp } from './selectors';
import { appSaga } from './saga';
import { Helmet } from 'react-helmet-async';
import { Container, IconButton, Snackbar } from '@material-ui/core';
import Header from '../../components/Header';
import { GlobalStyle } from 'styles/global-styles';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

interface Props {}

export const App: React.FC<Props> = props => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: appSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const app = useSelector(selectApp);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const username = app.currentUser?.username;

  const openSnackbar = null !== app.error;

  const handleClose = () => {
    dispatch(appActions.setAppError(null));
  };

  return (
    <>
      <Helmet titleTemplate="Solidarity" defaultTitle="Solidarity">
        <meta name="description" content="Solidarity" />
      </Helmet>

      <Container maxWidth="xl">
        {app.currentUser ? `Bonjour ${username}` : ''}
        <Header />
        <div>{props.children}</div>

        <div>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleClose}
            message={app.error}
            action={
              <React.Fragment>
                <Button color="secondary" size="small" onClick={handleClose}>
                  Close
                </Button>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </div>
      </Container>

      <GlobalStyle />
    </>
  );
};
