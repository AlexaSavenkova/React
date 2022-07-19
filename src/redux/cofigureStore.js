import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import {chatReducer} from "./reducers/chatReducer/chatReducer";
import {messageReducer} from "./reducers/messagesReducer/messagesReducer";
import {postsReducer} from "./reducers/postsReducer/postsReducer";
import { middlewares } from './middlewares';

const rootReducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer,
    posts: postsReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);