import MessageList from "../Messages/MessageList";
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getChatList} from "../../redux/reducers/chatReducer/chatSelector";
import {ADD_CHAT, DELETE_CHAT, ADD_NEW_CHAT_TO_MESSAGE_LIST, DELETE_ALL_MESSAGE_FROM_CHAT} from "../../redux/actionTypes";

import "./Chats.css";
import {useEffect} from "react";


function Chats() {
    const {chatId} = useParams();
    const chatList = useSelector(getChatList);
    const dispatch = useDispatch();

    const chatExists = chatList.find(chat => chat.id == chatId );


    const deleteChat = (id) => {
        dispatch({
            type: DELETE_CHAT,
            payload: id
        })
        dispatch({
            type: DELETE_ALL_MESSAGE_FROM_CHAT,
            payload: id
        })
    }

    const getNewChatId = () => {
        const last = chatList[chatList.length-1];
        return last ? last.id + 1 : 1;
    }

    const addChat = () => {
         const id = getNewChatId();
         const name = prompt('chat name');
        dispatch({
            type: ADD_CHAT,
            payload: {id, name}
        })
        dispatch({
            type: ADD_NEW_CHAT_TO_MESSAGE_LIST,
            payload: id,
        })
    }

    return (
        <div className = "App">
            <div className = "chat-list">
                {chatList.map((chat) => (
                        <div key = {chat.id} className="chat">
                            <NavLink to = {`/chats/${chat.id}`}>{chat.name}</NavLink>
                            <button onClick={() => deleteChat(chat.id)}>X</button>
                        </div>
                ))}
                <button className="add-chat-btn" onClick={addChat}>Add chat</button>
            </div>
            {chatId && chatExists && (<>
                <div className="messages">
                <MessageList currentChat = {chatId}/>
            </div>
                </>)}

        </div>
    )
}
export default Chats;