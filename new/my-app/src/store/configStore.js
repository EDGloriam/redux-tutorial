import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/indexReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const myStore = createStore(rootReducer, applyMiddleware(thunk, logger));

