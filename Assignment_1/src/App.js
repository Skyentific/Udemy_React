import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  
  state = {
    username: [
      {name: 'SKY'}
    ]
  }

  userNameChangeHandler = (event) => {
    // console.log(event);
    this.setState({
      username: [
        {name: event.target.value}
      ]
    })
  };
  
  render() {
    return (
      <div className="App">
        <UserInput 
          name={this.state.username[0].name}
          changed ={this.userNameChangeHandler}/>
    
        <UserOutput name={this.state.username[0].name}></UserOutput>
        <UserOutput name="Sky"></UserOutput>
      </div>
    );
  }
}

export default App;
