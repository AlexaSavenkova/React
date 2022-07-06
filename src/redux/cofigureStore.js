import {combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import {chatReducer} from "./reducers/chatReducer/chatReducer";
import {messageReducer} from "./reducers/messagesReducer/messagesReducer";

const reducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
});

export const store = createStore(reducer,composeWithDevTools());