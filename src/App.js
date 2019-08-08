import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        this.setState({ monsters: json });
      });
  }

  searchChange(e) {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase()
        .includes(searchField.toLowerCase())
    });

    return (
      <div className="App">
        <input
          type="search"
          placeholder='search monsters'
          onChange={ e => this.searchChange(e)}
        />
        <CardList  monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
