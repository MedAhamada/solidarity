/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import Root from './components/Root/Root.component';
import { Store } from 'redux';
import { Persistor } from 'redux-persist';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { createMuiTheme } from '@material-ui/core';
import history from '../utils/history';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { HelmetProvider } from 'react-helmet-async';

interface Props {
  persistor: Persistor;
  store: Store;
}
const theme = createMuiTheme();

const App: React.FunctionComponent<Props> = ({ persistor, store }: Props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <HelmetProvider>
              <Root>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route component={NotFoundPage} />
                </Switch>
              </Root>
            </HelmetProvider>
          </MuiPickersUtilsProvider>
        </PersistGate>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
);

export default App;
