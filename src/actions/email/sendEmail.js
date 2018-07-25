import {
    REQUEST_EMAIL,
    RESPONSE_EMAIL,
    FAILURE_EMAIL,
    CLEAR_EMAIL_INFO
} from '../../constants/email/email.constants';
import * as emailService from '../../services/email.service';
  
function sendEmailRequest(data) {
    return {
        type: REQUEST_EMAIL,
        data
    }
}
  
function sendEmailResponse(json) {
    return {
        type: RESPONSE_EMAIL,
        json
    }
}
  
function sendEmailFailure(error) {
    var message = error;

    if(!(error instanceof Array))
        message = [message];

    return {
        type: FAILURE_EMAIL,
        error: message
    }
}

export function clearEmailInfo() {
    return {
        type: CLEAR_EMAIL_INFO
    }
}
  
export function sendEmail(data) {
    return dispatch => {
        dispatch(sendEmailRequest(data));
        emailService.sendEmail(data)
            .then(
                json => {
                    if(json.status >= 400 && json.status <= 500)
                        dispatch(sendEmailFailure(json.error));
                    else
                        dispatch(sendEmailResponse(json.response));
                }
            )
            .catch(error => {
                dispatch(sendEmailFailure(error));
            })
    }
}