import {combineReducers} from 'redux'
import userReducer from './userReducer'
import portfolioReducer from './portfolioReducer'
export default combineReducers({
//    user: userReducer,
    portfolio: portfolioReducer
})
