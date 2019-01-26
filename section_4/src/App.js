import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' // should always use an upper case charater for customer compontents

class App extends Component {

  state = {
    persons: [
      {name: 'Sky', age: 48},
      {name: 'Dids', age: 48},
      {name: 'Test', age: 12}
    ],
    otherState: "Random",
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Sarah', age: 48},
        {name: event.target.value, age: 48},
        {name: 'Who cares', age: 12}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backGroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return (
              <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
              /> 
            )
          })}    
        </div>
      );
    }

    return (
      // The below is actually JSX and not HTML.  It's just made to look like HTML
      <div className="App">
        <h1>Hi, i'm a React app</h1>
        <p>This is really working</p>
        
        <button 
          style={style}
          onClick ={this.togglePersonsHandler}> Toggle Persons
        </button>
        
        {persons}      
      </div>
      // everything needs to be inside one root element (e.g. this div)
    );
  }
}

export default App;
