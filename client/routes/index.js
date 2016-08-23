import React from 'react';
import { Route } from 'react-router';

import App from '../App';
import FeedContainer from '../Feed/Container';
import EventsContainer from '../Events/Container';
import LeaderboardContainer from '../Leaderboard/Container';

const routes = (
  <Route path="/" component={App} >
    <Route path="/" component={EventsContainer} />
    <Route path="/leaderboard" component={LeaderboardContainer} />
    <Route path="/feed" component={FeedContainer} />
  </Route>
);

export default routes;
