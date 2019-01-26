import React from 'react';

const userInput = (props) => {

    return (
        <div>
        
            <input 
                type="text"
                onChange = {props.changed}
                value={props.word}
            />
        
        </div>
    )
};


export default userInput;