import {
    REQUEST_EMAIL,
    RESPONSE_EMAIL,
    FAILURE_EMAIL,
    CLEAR_EMAIL_INFO
} from '../../constants/email/email.constants';
  
export function sendEmail(
    state = {
        payload: [],
        error: [],
        isFetching: false,
        isError: false
    },
        action
    ) {
        switch(action.type) {
            case REQUEST_EMAIL:
                return {
                    ...state,
                    isFetching: true,
                    isError: false
                }
        
            case RESPONSE_EMAIL:
                return {
                    ...state,
                    payload: action.json,
                    isFetching: false,
                    isError: false
                }
        
            case FAILURE_EMAIL:
                return {
                    ...state,
                    error: action.error,
                    isFetching: false,
                    isError: true,
                }

            case CLEAR_EMAIL_INFO: {
                return {
                    ...state, 
                    payload: [],
                    error: [],
                    isFetching: false,
                    isError: false
                }
            }
        
            default:
                return state;
    }
}