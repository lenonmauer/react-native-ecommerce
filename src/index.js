import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import { store } from './store';
import AppNavigation from './navigation';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <AppNavigation />
    </Fragment>
  </Provider>
);

export default App;
