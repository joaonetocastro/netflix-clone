import React, { Component } from 'react';

// import { Container } from './styles';

export default class Button extends Component {
  constructor(props){
    super();
    this.content = props.children;
  }
  render() {
    return (
      <button className="btn">
        { this.content }
      </button>
    );
  }
}
