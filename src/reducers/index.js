import { combineReducers } from 'redux';
import { sendEmail } from './email/sendEmailReducer';

export default combineReducers({
    sendEmail
})