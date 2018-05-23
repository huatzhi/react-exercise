import React from "react";

const userInput = (props) => {
    return (
        <input type='text' onChange={props.update} value={props.username}></input>
    )
};

export default userInput;