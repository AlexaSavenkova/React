import React  from 'react';
import {useEffect} from "react";
import Message from "./Message";
import './Messages.css';

function MessageList({messageList}) {

    useEffect(() => {
        setTimeout(()=>{
            const lastMsg = messageList[messageList.length-1];
            if (lastMsg && lastMsg.author) console.log('Message from author ', lastMsg.author, ' has been send');
        }, 2000);
    },[messageList]);

    return (
        <div className = "message-list">
            {messageList.map((message) => (
               <Message key = {message.id} text = {message.text} author = {message.author} />
            ))}
        </div>
    )
}
export default MessageList;
