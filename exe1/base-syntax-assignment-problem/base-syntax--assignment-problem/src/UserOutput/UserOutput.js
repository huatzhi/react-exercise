import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
    const bold = {fontWeight: "bold"};

    return (
        <div className="Output">
            <p>Your UserName:</p>
            <p style={bold}>{props.username}</p>
        </div>
    )
};

export default userOutput;