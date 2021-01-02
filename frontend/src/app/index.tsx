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
import { App as AppPage } from './containers/App';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { Login } from './containers/Login';

export function App() {
  const { i18n } = useTranslation();
  return (
    <AppPage>
      <Suspense fallback={<div className="loader" />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </AppPage>
  );
}
