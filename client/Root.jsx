import React, { PropTypes } from 'react';

import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { Provider } from 'react-redux';

import Routes from './routes/';

const propTypes = {
  store: PropTypes.object.isRequired,
};

export default function Root({ store }) {
  const history = syncHistoryWithStore(browserHistory, store);
  console.log('root');
  return (
    <Provider store={store}>
      <Router history={history} routes={Routes} />
    </Provider>
  );
}

Root.propTypes = propTypes;
