import React from 'react';

function  Greeting(params) {
    let username = 'Ali';
    return (
        <h1>{(username === undefined || username === null) ? 'Not Logged In' : `Hello, ${username}`}</h1>
    );
}

export default Greeting;