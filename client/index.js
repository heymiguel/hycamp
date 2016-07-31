import React from 'react';
import { render } from 'react-dom';

import css from './styles/main.scss';

import configureStore from './store/';

import Root from './Root';

const store = configureStore();

render(<Root store={store} />, document.getElementById('main'));
