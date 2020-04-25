import React, { Component } from 'react';
import NetflixLogo from '../components/NetflixLogo';
import Button from '../components/Button';
// import { Container } from './styles';

export default class LoginScreen extends Component {
  render() {
    return (
      <header className="header">
          <div className="header-top">
            <NetflixLogo/>
          </div>
          <div className="header-content">
            <div className="header-dark">
              <h1>Sign In</h1>
              <form>
                <input 
                  type="email" 
                  placeholder="Email or phone number" 
                  name="email"/>
                <input 
                  type="password" 
                  placeholder="Password" 
                  name="password"/>
                <Button to='/browse'>Sign In</Button>
              </form>
            </div>
          </div>
        </header>
    );
  }
}
