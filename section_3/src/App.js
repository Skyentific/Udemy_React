import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' // should always use an upper case charater for customer compontents

class App extends Component {

  state = {
    persons: [
      {name: 'Sky', age: 48},
      {name: 'Dids', age: 48},
      {name: 'Test', age: 12}
    ]
  };

  render() {
    return (
      // The below is actually JSX and not HTML.  It's just made to look like HTML
      <div className="App">
        <h1>Hi, i'm a React app</h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/> {/* this refers to the class */}
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies: racing</Person>
      </div>
      // everything needs to be inside one root element (e.g. this div)
    );
  }
}

export default App;
