import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from '../root-reducer';

export default function configureStore() {
  const route = routerMiddleware(browserHistory);
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, route),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../root-reducer', () => {
      const nextReducer = require('../root-reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
