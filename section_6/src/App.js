import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person' // should always use an upper case charater for customer compontents
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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

    let btnClass = '';

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return (
             <ErrorBoundary key={person.id}
             >
                <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            )
          })}    
        </div>
      );
      btnClass = styles.Red;
    }
    const assignedClasses = [];

    if(this.state.persons.length <=2) {
      assignedClasses.push(styles.red)
    }
    if(this.state.persons.length <=1) {
      assignedClasses.push(styles.bold)
    }

    return (
      // The below is actually JSX and not HTML.  It's just made to look like HTML
      <div className={styles.App}>
        <h1>Hi, i'm a React app</h1>
        <p className = {assignedClasses.join(' ')}>This is really working</p>
        
        <button 
          className={btnClass}
          onClick ={this.togglePersonsHandler}> Toggle Persons
        </button>
        
        {persons}      
      </div>
      // everything needs to be inside one root element (e.g. this div)
    );
  }
}

export default App;
