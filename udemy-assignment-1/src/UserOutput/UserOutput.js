import React from 'react';

import './UserOutput.css'

const UserOutput = (props) => {
    return <div>
        <p>{props.children} {props.username}</p>
        <p>age: {props.age}</p>
    </div>
}

export default UserOutput;