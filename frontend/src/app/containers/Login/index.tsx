/**
 *
 * Login
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, loginActions } from './slice';
import { selectLogin } from './selectors';
import { loginSaga } from './saga';
import { Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import LoginForm from 'app/components/LoginForm/LoginForm.component';

type Values = {
  username: string;
  password: string;
};

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '1rem',
  },
}));

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

  const handleSubmitValues = (values: Values) => {
    dispatch(loginActions.postLogin(values));
  };

  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <div className={classes.container}>
        <Grid container>
          <Grid item md={3} />
          <Grid item md={6} xs={12}>
            <Card>
              <CardContent>
                <h1>Login</h1>
                <LoginForm handleSubmitValues={handleSubmitValues} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item md={3} />
      </div>
    </>
  );
}
