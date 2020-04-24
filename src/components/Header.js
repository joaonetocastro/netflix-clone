import React, { Component } from 'react';
import NetflixLogo from './NetflixLogo';
import Button from '../components/Button';

export default class Header extends Component {
  render() {
    return (
        <header className="header">
          <div className="header-top">
            <NetflixLogo/>
            <Button>Sign In</Button>
          </div>
          <div className="header-content">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or access your account.</h3>
            <form className="inline-form">
              <input 
              type="text" 
              placeholder="Email adress" 
              name="email"/>
              <button className="btn">JOIN NOW ></button>
            </form>
          </div>
        </header>
    );
  }
}
