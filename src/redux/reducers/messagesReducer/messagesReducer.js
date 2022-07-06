import {ADD_MESSAGE, ADD_NEW_CHAT_TO_MESSAGE_LIST, DELETE_ALL_MESSAGE_FROM_CHAT} from "../../actionTypes";

const initialState = {
    messageList: {
        1 : [
            {
             id: 1,
             text: 'test message for chat 1',
             author: 'robot'
            },
            {
                id: 2,
                text: 'one more test message for chat 1',
                author: 'robot'
            }
        ],
        2 : [
            {
                id: 1,
                text: 'test message for chat 2',
                author: 'robot'
            }
        ],
    }
}


export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = {id: action.payload.id ,text: action.payload.text, author: action.payload.author};
            const chatId = action.payload.currentChat;
            return {
                ...state,
                messageList: {
                   ...state.messageList, [chatId]: [...state.messageList[chatId], newMessage]}
            };
        }
        case ADD_NEW_CHAT_TO_MESSAGE_LIST:
            return {
                ...state,
                messageList: {
                    ...state.messageList, [action.payload]: []
                }
            }
        case DELETE_ALL_MESSAGE_FROM_CHAT:{
            const newList ={};
            Object.assign(newList, state.messageList);
            delete newList[action.payload];
            return {
                ...state,
                messageList: newList
            }
        }

        default:
            return state;
    }
}