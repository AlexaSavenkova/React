import './App.css';
import {useState} from "react";
import MessageList from '../Messages/MessageList';
import Form from '../Form/Form';
import Chats from "../Chats/Chats";

function App() {
    const [messageList , setMessageList] = useState([]);
    const [chatList, setChatList] = useState([
        {
            id: 1,
            name: 'First chat'
        },
        {
            id: 2,
            name: 'Second chat'
        }
    ]);

    return (
        <div className="App">
            <div className="chat-list">
                <Chats chatList = {chatList}/>
            </div>
            <div className="messages">
                <MessageList messageList = {messageList}/>
                <br/>
                <Form setMessageList = {setMessageList}/>
            </div>

        </div>

    );
}

export default App;
