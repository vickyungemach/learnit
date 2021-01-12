import { combineReducers } from 'redux';
import auth from './auth';
import words from './words';
import utils from './utils';

export default combineReducers({
    auth,
    words,
    utils
});