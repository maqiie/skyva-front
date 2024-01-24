

import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUp: false,
      usernameOrEmail: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSwitchClick = () => {
    this.setState((prevState) => ({
      isSignUp: !prevState.isSignUp,
    }));
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { isSignUp, usernameOrEmail, password, confirmPassword } = this.state;

    return (
      <div className="container">
        <div className="card2">
          <a className="switch" onClick={this.handleSwitchClick}>
            Switch to {isSignUp ? 'Login' : 'Sign Up'}
          </a>
          <div className="inputBox1">
            <input
              type="text"
              required="required"
              name="usernameOrEmail"
              onChange={this.handleInputChange}
            />
            <span className="user">{isSignUp ? 'Email' : 'Username'}</span>
          </div>

          {isSignUp && (
            <div className="inputBox">
              <input
                type="password"
                required="required"
                name="password"
                value={password}
                onChange={this.handleInputChange}
              />
              <span>Password</span>
            </div>
          )}

          {isSignUp && (
            <div className="inputBox">
              <input
                type="password"
                required="required"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleInputChange}
              />
              <span>Confirm Password</span>
            </div>
          )}

          {!isSignUp && (
            <div className="inputBox">
              <input
                type="password"
                required="required"
                name="password"
                value={password}
                onChange={this.handleInputChange}
              />
              <span>Password</span>
            </div>
          )}

          <button className="enter">{isSignUp ? 'Sign Up' : 'Login'}</button>
        </div>
      </div>
    );
  }
}

export default Login;
