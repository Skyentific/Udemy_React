import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' // should always use an upper case charater for customer compontents

class App extends Component {
  render() {
    return (
      // The below is actually JSX and not HTML.  It's just made to look like HTML
      <div className="App">
        <h1>Hi, i'm a React app</h1>
        <p>This is really working</p>
        <Person />
        <Person />
        <Person />
      </div>
      // everything needs to be inside one root element (e.g. this div)
    );
  }
}

export default App;
