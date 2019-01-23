import React from "react";
import ReactDOM from "react-dom";

// props automatically takes the parameters from the ReactDOm call below and converts them
// to variables.
function Person (props) {  // needs to be a capital letter to work with react
    return (
        <div className="person">
            <h1>{ props.name }</h1>
            <p>{ props.age }</p>
        </div>
    );
}

let app = (
    <div>
        <Person name = "Sky" age = "48"/>
        <Person name = "Dids" age = "48"/>
    </div>
);

// Typically only have on e of these in a single page app
ReactDOM.render(app, document.querySelector('#app'));  