import React from 'react';
import avatar from './avatar.jpeg';
import './styles.css';

function Avatar() {
    return (
        <img src={avatar} alt='twitter avatar' className='avatar'/>
    );
}

export default Avatar;