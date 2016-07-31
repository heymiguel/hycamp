import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userReducer from './user/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
});

export default rootReducer;
