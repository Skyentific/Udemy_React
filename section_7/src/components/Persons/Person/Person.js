import React, { Component } from 'react';
import styles from './Person.module.css'

class Person extends Component {
    
    constructor(props) {
        super(props);
        // this.state = ''  // alternative to initalise state
        console.log('[Person.js] inside constructor()', props);  
      }
    
      componentWillMount() {
        console.log('[Person.js] inside componentWillMount()');
      }
    
      componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
      }

    render () {
        console.log('[Person.js] Inside render()');

        return (
        
            <div className = {styles.Person}>
                <p onClick = {this.props.click}> I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}


export default Person;