import {ADD_MESSAGE} from "../actionTypes";

export const messageMiddleware = store => next => action => {
    switch (action.type) {
        case ADD_MESSAGE: {

            if (action.payload.author !== 'robot') {
                const robotMsg = {
                    currentChat: action.payload.currentChat,
                    id: action.payload.id + 1,
                    text: 'auto response from robot',
                    author: 'robot'
                }
                console.log(robotMsg);
                console.log(store);
                setTimeout(()=>{
                    store.dispatch({type: ADD_MESSAGE, payload: robotMsg});

                }, 2000);
            }
        }
    }
    return next(action);
}