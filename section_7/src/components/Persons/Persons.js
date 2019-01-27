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

      // Just see commit comments

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