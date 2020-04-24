import React, { Component } from 'react';
import logo from '../assets/img/netflix_logo.png';

export default class NetflixLogo extends Component {
  render() {
    return (
      <img 
      src={logo}
      alt="netflix logo"
      className="netflix-logo" />
    );
  }
}
