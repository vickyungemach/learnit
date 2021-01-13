import { combineReducers } from 'redux';
import auth from './auth';
import words from './words';
import utils from './utils';
import lists from './lists';

export default combineReducers({
    auth,
    words,
    utils,
    lists
});