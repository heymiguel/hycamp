import React, { PropTypes } from 'react';
import fetch from 'isomorphic-fetch';
import { Glyphicon } from 'react-bootstrap';

import TopNav from './components/TopNav';
import Logo from './components/Logo';
import GithubIcon from './components/GithubIcon';
import FacebookIcon from './components/FacebookIcon';


const propTypes = {
  children: PropTypes.node,
};
  
function fetchUser() {
  return new Promise((resolve, reject) => {
    fetch('/api/user/getUser', { method: 'GET', credentials: 'same-origin' })
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
        user: response.user,
      });
    }).catch(err => {
      console.log(err);
    });
  }

  getName(user) {
    if (!user) return null;
    if (user.hasOwnProperty('github')) return user.github.name;
    return user.facebook.name;
  }

  render() {
    const getName = this.state.user;
    return (
      <div className="root">
        <header>
          <div className="login-bar">
            <Logo />
            <h1>Welcome to Camp!</h1>
            { this.state.user ?
              <div className="login-buttons">
                {`Hi ${this.getName(this.state.user).split(' ')[0]}!`}
                <a className="login-button" href="/auth/logout">
                  <Glyphicon glyph="log-out" />
                </a>

              </div>
              :
              <div className="login-buttons">
                <div className="login-buttons-label">
                  Log in
                </div>
                <a className="login-button" href="/auth/login/github">
                  <GithubIcon height={24} />
                </a>
                <a className="login-button" href="/auth/login/facebook">
                  <FacebookIcon height={24} />
                </a>
              </div>
            }
          </div>
          <TopNav />
        </header>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = propTypes;
