import authReducer from './authReducer'
import lectureReducer from './lectureReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    lecture: lectureReducer
});

export default rootReducer