import React, { Component } from 'react';

class ExampleClass extends Component {

  constructor() {
    super();

    this.state = {
      title: 'Example Class'
    }
  }

  render() {
    return (
      <div className="ExampleClass">
        <h1>This is a { this.state.title }</h1>
      </div>
    );
  }
}
