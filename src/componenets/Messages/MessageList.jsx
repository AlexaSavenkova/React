import React, {useRef} from 'react';
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getMessageList} from "../../redux/reducers/messagesReducer/messagesSelector";

import Message from "./Message";
import './Messages.css';

import Form from "./Form";
import "./Form.css";


function MessageList({ currentChat}) {

    const messagesFieldRef = useRef();
    const messageList = useSelector(getMessageList)[currentChat];
    const lastMessageId = messageList.length;

    useEffect(() => {
        messagesFieldRef.current.scrollTop = messagesFieldRef.current.scrollHeight;
    },[messageList]);

    return (
        <div className="messages">
            <div className = "message-list" ref = {messagesFieldRef}>
                {messageList.map((message) => (
                    <Message key = {message.id} text = {message.text} author = {message.author} />
                ))}
            </div>
            <br/>
            <Form currentChat = {currentChat}  lastMessageId = {lastMessageId}/>
        </div>
    )
}
export default MessageList;
