import React, { Component } from 'react';
import Radium, { StyleRoot }from 'radium';
import './App.css';
import Person from './Person/Person' // should always use an upper case charater for customer compontents

class App extends Component {

  state = {
    persons: [
      {id: '1', name: 'Sky', age: 48},
      {id: '2', name: 'Dids', age: 48},
      {id: '3', name: 'Test', age: 12}
    ],
    otherState: "Random",
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();  // make a copy of the array to edit
    const persons = [...this.state.persons];; // alternate way to make copy
    persons.splice(personIndex, 1);  // modify the copy
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    
    // get the index of the selected item in the list
    const personIndex = this.state.persons.findIndex( p => {
        return p.id === id;
      }
    );

    // make a copy of the person data for the indexed person
    const person = {...this.state.persons[personIndex]};
    
    // update the person data
    person.name = event.target.value;

    // make a copy of the origin persons list
    const persons = [...this.state.persons];
    
    // update the copy
    persons[personIndex] = person;

    // write the copy over the original list
    this.setState( 
      {persons: persons}
    );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      } // Radium pseudo style
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
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              /> 
            )
          })}    
        </div>
      );
      style.backgroundColor ='red';
      style[':hover']= {  // need square brackets as its a string.
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    // let classes = ['red', 'bold'].join(' '); // what we need
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }


    return (
      // The below is actually JSX and not HTML.  It's just made to look like HTML
      <StyleRoot>
        <div className="App">
          <h1>Hi, i'm a React app</h1>
          <p className = {classes.join(' ')}>This is really working</p>
          
          <button 
            style={style}
            onClick ={this.togglePersonsHandler}> Toggle Persons
          </button>
          
          {persons}      
        </div>
      </StyleRoot>
      // everything needs to be inside one root element (e.g. this div)
    );
  }
}

export default Radium(App);
