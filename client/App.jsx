import React, { PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

import TopNav from './components/TopNav';


const propTypes = {
  children: PropTypes.node,
};
  
function fetchUser() {
  return new Promise((resolve, reject) => {
    fetch('/api/user/getUser', { credentials: 'same-origin' })
      .then(response => {
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingUser: true,
      user: null,
    };
  }

  componentDidMount() {
    fetchUser().then(response => {
      this.setState({
        user: response,
      });
    });
  }

  render() {
    return (
      <div className="root">
        <header>
          <a href="http://localhost:3000/auth/login/github">github</a>
          <a href="http://localhost:3000/auth/login/facebook">facebook</a>
          <TopNav />
        </header>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = propTypes;
