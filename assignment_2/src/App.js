import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import Validation from './Validation/Validation'
import Char from './Char/Char'

import './App.css';

class App extends Component {
  
  state = {
    wordLength: 0,
    word:""
  }

  inputChangeHandler = (event) => {
    
    let newWord = event.target.value.toString();
    let newWordLength = newWord.length;
    this.setState({
      wordLength: newWordLength,
      word: newWord
    });
  }

  deleteLetter = (letterIndex) => {
    console.log(letterIndex);
    let word = [...this.state.word];
    word.splice(letterIndex, 1);
    word = word.join('');

    let newWordlength = word.length;

    this.setState({
      wordLength: newWordlength,
      word: word})
  }
  
  render() {

    let characters = null;
    if (this.state.word.length > 0) {
      characters = (
        <div>
          {[...this.state.word].map((letter, i) => {
            return (
              <Char
                letter={letter}
                key={i}
                click={() => this.deleteLetter(i)}
              />
            )
          })}
        </div>
      )
    }

    return (
      <div className="App">

        {/* Get text input */}
        <UserInput
          changed = {(event) => this.inputChangeHandler(event)}
          word = {this.state.word}
        />
        
        {/* Output the length of the input text  */}
        <p> {this.state.wordLength} </p>
        <Validation
          value = {this.state.wordLength}
        /> 
        {characters}
      </div>
    );
  }
}

export default App;
