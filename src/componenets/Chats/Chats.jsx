import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


import MessageList from "../Messages/MessageList";
import {NavLink, useParams} from "react-router-dom";

import "./Chats.css";

function Chats( {chats, setChats } ) {
    const {chatId} = useParams();
    const chatExists = !!chats[chatId];

    const deleteChat = (id) => {
        const removeId = ({[id]:_, ...rest}) => rest;
        setChats(removeId(chats));
    }

    const getNewChatId = () => {
        const last = +Object.keys(chats)[Object.keys(chats).length-1];
        return last + 1;
    }

    const addChat = () => {
        const id = getNewChatId();
        const name = prompt('chat name');
        const newChat = {[id]: {name: name, messages: []} };
        const newChats = {...chats, ...newChat};
        setChats(newChats);
        console.log(newChats);
    }

    return (
        <div className = "App">
            <div className = "chat-list">
                {Object.keys(chats).map((id, index) => (
                        <div key = {index} className="chat">
                            <NavLink to = {`/chats/${id}`}>{chats[id].name}</NavLink>
                            <button onClick={() => deleteChat(id)}>X</button>
                        </div>
                ))}
                <button className="add-chat-btn" onClick={addChat}>Add chat</button>
            </div>

            {chatId && chatExists && (<>
                <div className="messages">
                <MessageList
                    setChats = {setChats}
                    chats = {chats}
                    currentChat = {chatId}/>
            </div>
                </>)}

        </div>
    )
}
export default Chats;