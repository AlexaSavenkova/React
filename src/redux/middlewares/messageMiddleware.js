import {ADD_MESSAGE} from "../actionTypes";

export const messageMiddleware = store => next => action => {
    if (action.type === ADD_MESSAGE && action.payload.author !== 'robot') {


                const robotMsg = {
                    currentChat: action.payload.currentChat,
                    id: action.payload.id + 1,
                    text: 'auto response from robot',
                    author: 'robot'
                }
                setTimeout(()=>{
                    store.dispatch({type: ADD_MESSAGE, payload: robotMsg});

                }, 2000);


    }
    return next(action);
}