import React from 'react';
import Person from './Person/Person'

// Note, in ES6 functions, you don't need a return statement if
// there is no function logic.  Just surround everything in ()

const persons = (props) => (
    props.persons.map((person, index) => (
        
        <Person 
            click={() => props.clicked(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => props.changed(event, person.id)}
        />

    ))
)
    
export default persons;