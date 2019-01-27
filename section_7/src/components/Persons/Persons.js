import React, { Component } from 'react';
import Person from './Person/Person'

// Note, in ES6 functions, you don't need a return statement if
// there is no function logic.  Just surround everything in ()
class Persons extends Component {

    constructor(props) {
        super(props);
        // this.state = ''  // alternative to initalise state
        console.log('[Persons.js] inside constructor()', props);  
      }
    
      componentWillMount() {
        console.log('[Persons.js] inside componentWillMount()');
      }
    
      componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
      }

      componentWillUnmount() {
        console.log('[Persons.js] Inside componentDidUnmount()');
      }

      componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWellReceiveProps', nextProps);
      }

      shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
        // return false;  // will stop the update
        return nextProps.persons !== this.props.persons;  // only render if there is an actual update
      }

      componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
      }

      componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
      }

    render () {
        console.log('[Persons.js] Inside render()');

        return this.props.persons.map((person, index) => (
        
            <Person 
                click={() => this.props.clicked(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />
    
        ))
    }
}
    
export default Persons;