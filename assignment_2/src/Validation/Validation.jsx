import React from 'react';

const validation = (props) => {

    // Check how long the user input is long enough
    let check = "";
    if (props.value >= 5) {
        check = "Text is long enough"
    } else {
        check = "Text is too short"
    }
     
    return (
        <div>
            <p> Text is {props.value} characters long.</p>
            <p> {check} </p>
        </div>
    )
}

export default validation;