import React from 'react';
import styles from './Cockpit.module.css';
import Aux from '../../hoc/Aux'

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = styles.Button;

    if (props.showPersons) {
        btnClass = [styles.Button, styles.Red].join(' ');
    }

    if(props.persons.length <=2) {
      assignedClasses.push(styles.red)
    }
    if(props.persons.length <=1) {
      assignedClasses.push(styles.bold)
    }

    return (
        
        <Aux>
        <h1>{props.appTitle}</h1>
            <p className = {assignedClasses.join(' ')}>This is really working</p>
            
            <button 
                className={btnClass}
                onClick={props.clicked}
            >Show Persons </button>
            <button onClick = {props.login}>Log in</button>
        </Aux>
    )
}

export default React.memo(cockpit);