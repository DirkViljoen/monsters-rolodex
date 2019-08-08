import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        this.setState({ monsters: json });
      });
  }

  updateState() {
    if (this.state.string === 'Hello Dirk') {
      this.setState({ string: 'Hello Belinda' });
      return;
    }

    this.setState({ string: 'Hello Dirk' });

  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => <h1 key={ monster.id }> { monster.name } </h1>)
        }
      </div>
    );
  }
}

export default App;
