import * as React from 'react';
import { render } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import history from 'utils/history';

import { configureAppStore } from 'store/configureStore';
import { Login } from '..';

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <HelmetProvider>
        <Login />
      </HelmetProvider>
    </Provider>,
  );

describe('<Login />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore(history);
  });
  it('should match the snapshot', () => {
    const component = renderComponent(store.store);
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
