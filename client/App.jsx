import React, { PropTypes } from 'react';

import fetch from 'isomorphic-fetch';

import TopNav from './components/TopNav';


const propTypes = {
  children: PropTypes.node,
};

function fetchUser() {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/api/user/getUser', { method: 'GET', credentials: 'same-origin' })
      .then(response => {
        console.log(response.body);
        return response.json();
      })
      .then(data => {
        console.log(data);
        resolve(data);
      })
      .catch(err => {
        console.log(err);
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
    console.log('mounting');
    fetchUser().then(response => {
      this.setState({
        user: response.data[0],
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
