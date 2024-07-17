import React from "react";

const User = props => {
    return (
        <div>
            <h3>name: {props.name}</h3>
            <p>age: {props.age}</p>
        </div>
    );
}

export default User;