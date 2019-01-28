import React, { Component } from 'react';
import styles from './Person.module.css'
import WithClass from '../../../hoc/WithClass'
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
            
            <WithClass classes = {styles.Person}>

                <p onClick = {this.props.click}> I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            
            </WithClass>
        )

        // alternate way, need to add 'Key's
        // return [
        //     <p key ='1' onClick = {this.props.click}> I'm {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key ='2'>{this.props.children}</p>,
        //     <input key = '3' type="text" onChange={this.props.changed} value={this.props.name}/>
        // ]
    }
}


export default Person;