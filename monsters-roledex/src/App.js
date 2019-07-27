import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-listcomponent';



class App extends Component {

  state = {
    monsters: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then(users => this.setState({monsters: users}))
  }

  render() {
    return (
      <div className="App">
        <CardList name="Martek">
        { this.state.monsters.map(monster => 
        <div key ={monster.id} className='monster-card'>{monster.name}</div>)}
      </CardList>
    </div>

    );
  }
  
}

export default App;
