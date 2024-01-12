import counterReducer from './counter';
import mobileReducer from './isMobile';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter : counterReducer,
    isMobile : mobileReducer,
    isLogged: loggedReducer
})

export default allReducers;