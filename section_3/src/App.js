import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   // The below is actually JSX and not HTML.  It's just made to look like HTML
    //   <div className="App">
    //     <h1>Hi, i'm a React app</h1>
    //   </div>
    // );

    // This equivalent to the above.
    return React.createElement('div', {className: 'App'}, 
      React.createElement('h1', null,  'Hi, i\'m a React App!!!')
    )
  }
}

export default App;
