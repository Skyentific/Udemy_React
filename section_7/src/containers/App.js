import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons' // should always use an upper case charater for customer compontents
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      persons: [
        {id: '1', name: 'Sky', age: 48},
        {id: '2', name: 'Dids', age: 48},
        {id: '3', name: 'Test', age: 12}
      ],
      otherState: "Random",
      showPersons: false,
      toggleClicked:0,
      authenticated: false
    }
    console.log('[App.js] inside constructor()', props);  
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[App.js] Inside getDerivedStateFromProps()', nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('[App.js] Inside getDerivedStateFromProps()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    // return false;  // will stop the update
    return nextState.persons !== this.state.persons ||
           nextState.showPersons !== this.state.showPersons ||
           nextState.authenticated !== this.state.authenticated;  
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
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
    this.setState( (prevState, props) => {
      return{
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
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
      <>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          persons = {this.state.persons}
          showPersons = {this.state.showPersons}
          clicked = {this.togglePersonsHandler}
          login={this.loginHandler}
          
        />
        
        <AuthContext.Provider value = {this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
        
      </>
      // everything needs to be inside one root element (e.g. this div)
    );
  }
}


export default withClass(App, styles.App);
