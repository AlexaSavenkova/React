import {createLogger} from 'redux-logger';
import {messageMiddleware} from "./messageMiddleware";
import thunk from 'redux-thunk';

const logger = createLogger({
    collapsed: true,
    diff: true,
});

export const middlewares = [ thunk, logger, messageMiddleware ];
