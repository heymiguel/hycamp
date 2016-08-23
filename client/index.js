import React from 'react';
import { render } from 'react-dom';

import { Router, browserHistory } from 'react-router';

import Routes from './routes/';

import css from './styles/main.scss';

render(<Router history={browserHistory} routes={Routes} />, document.getElementById('main'));
