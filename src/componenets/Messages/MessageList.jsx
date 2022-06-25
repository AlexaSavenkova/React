import React, {useRef} from 'react';
import {useEffect} from "react";

import Message from "./Message";
import './Messages.css';

import Form from "./Form";
import "./Form.css";

function MessageList({ currentChat, setChats, chats}) {

    const messagesFieldRef = useRef();
    const messageList = chats[currentChat].messages;

    useEffect(() => {
        setTimeout(()=>{
            const lastMsg = messageList[messageList.length-1];
            if (lastMsg && lastMsg.author) console.log('Message from author ', lastMsg.author, ' has been send');
        }, 2000);
        messagesFieldRef.current.scrollTop = messagesFieldRef.current.scrollHeight;
    },[messageList]);

    return (
        <div className="messages">
            <div className = "message-list" ref = {messagesFieldRef}>
                {/*{messageList.map((message, index) => (*/}
                {/*   <Message key = {index} text = {message.text} author = {message.author} messageList = {messageList}/>*/}
                {/*))}*/}
                {messageList.map((message, index) => (
                    <Message key = {index} text = {message.text} author = {message.author} messageList = {messageList}/>
                ))}
            </div>
            <br/>
            <Form setChats = {setChats} currentChat = {currentChat} chats = {chats}/>
        </div>
    )
}
export default MessageList;
