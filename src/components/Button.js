import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Button extends Component {
  constructor(props){
    super();
    this.content = props.children;
    this.to = props.to || '/';
  }
  render() {
    return (
      <NavLink to={this.to}>
        <button className="btn">
          { this.content }
        </button>
      </NavLink>
    );
  }
}
