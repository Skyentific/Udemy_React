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

ReactDOM.render(<Person name = "Sky" age = "22" />, document.querySelector('#p1'));
ReactDOM.render(<Person name = "Dids" age = "48" />, document.querySelector('#p2'));