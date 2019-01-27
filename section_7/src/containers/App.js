import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons' // should always use an upper case charater for customer compontents
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  constructor(props) {
    super(props);
    // this.state = ''  // alternative to initalise state
    console.log('[App.js] inside constructor()', props);  
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }
  
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
    console.log('[App.js] Inside render()');
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
          clicked = {this.deletePersonHandler}
          persons = {this.state.persons}
          changed = {this.nameChangedHandler}/>;
    }

    return (
      // The below is actually JSX and not HTML.  It's just made to look like HTML
      <div className={styles.App}>
        <Cockpit
          appTitle={this.props.title}
          persons = {this.state.persons}
          showPersons = {this.state.showPersons}
          clicked = {this.togglePersonsHandler}
        />
        {persons}
      </div>
      // everything needs to be inside one root element (e.g. this div)
    );
  }
}

export default App;