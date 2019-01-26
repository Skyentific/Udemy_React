import React from 'react'
import './UserInput.css'

const userInput = (props) => {

    const inputStyle = {
        border: '2px solid grey'
    }

    return (
        <input className = 'UserInput'
            style={inputStyle}
            type = "text" 
            onChange = {props.changed} 
            value = {props.name}
        ></input>

    )
};

export default userInput;