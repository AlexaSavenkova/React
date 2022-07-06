import {ADD_CHAT, DELETE_CHAT} from "../../actionTypes";

const initialState = {
    chatList: [
        {
            id: 1,
            name: 'First chat'
        },
        {
            id: 2,
            name: 'Second chat'
        },
    ]
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [...state.chatList, action.payload]
            }
        case DELETE_CHAT:
            return {
                ...state,
                chatList: state.chatList.filter((chat) => chat.id !== action.payload)
            }

        default:
            return state;
    }
}

