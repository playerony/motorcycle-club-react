import {
    REQUEST_EMAIL,
    RESPONSE_EMAIL,
    FAILURE_EMAIL
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
    return {
        type: FAILURE_EMAIL,
        error
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