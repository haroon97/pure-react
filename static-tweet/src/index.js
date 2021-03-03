import React from 'react';
import ReactDOM from 'react-dom';
import Author from './Author';
import Time from './Time';
import Message from './Message';
import Avatar from './Avatar';
import ReplyButton from './ReplyButton';
import RetweetButton from './RetweetButton';
import LikeButton from './LikeButton';
import MoreButton from './MoreButton';

function Tweet() {
    return (
        <div className='tweet'>
            <div className='userAvatar'>
                <Avatar />
            </div>
            <div className='tweetContainer'>
                <div className='tweetInfo'>
                    <Author />
                    <Time />
                </div>
                <div className='message'>
                    <Message />
                </div>
                <div className='icons'>
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreButton />
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<Tweet/>, document.querySelector('#root'));