import React from 'react';

const validation = (props) => {

    let check = "";
    if (props.value >= 5) {
        check = "Text is too long"
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