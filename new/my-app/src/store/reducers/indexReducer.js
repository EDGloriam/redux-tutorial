import { combineReducers } from 'redux' 
import { userReducer } from './User'
import { pageReducer } from './Page'



export const rootReducer = combineReducers({
    page: pageReducer,
    user: userReducer
});