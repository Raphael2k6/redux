import { combineReducers} from 'redux';
import postReducer from './postReducer';

// posts will be used to send state to the component
export default combineReducers({
    posts: postReducer
})