import { combineReducers } from 'redux';
import { sendEmail } from './email/sendEmailReducer';
import { readFile } from './dropbox/readFileReducer';
import { readdir } from './dropbox/readdirReducer';

export default combineReducers({
    sendEmail,
    readFile,
    readdir
})