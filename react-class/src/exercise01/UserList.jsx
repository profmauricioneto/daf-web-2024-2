import React from 'react';
import User from './User'

export const UserList = () => {
    const users = [
        { name: "Alice", age: 25 }, 
        { name: "Bob", age: 30 }, 
        { name: "Charlie", age: 35 }
    ]

    return (
        <div>
            {users.map((user, index) => (
                <User key={index} name={user.name} age={user.age} />
            ))}
        </div>
    );
}