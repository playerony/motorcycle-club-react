import {
    FAILURE_READFILE,
    REQUEST_READFILE,
    RESPONSE_READFILE
} from '../../constants/dropbox/dropbox.contants';
  
export function readFile(
    state = {
        payload: [],
        error: [],
        isFetching: false,
        isError: false
    },
        action
    ) {
        switch(action.type) {
            case REQUEST_READFILE:
                return {
                    ...state,
                    isFetching: true,
                    isError: false
                }
        
            case RESPONSE_READFILE:
                return {
                    ...state,
                    payload: action.json,
                    isFetching: false,
                    isError: false
                }
        
            case FAILURE_READFILE:
                return {
                    ...state,
                    error: action.error,
                    isFetching: false,
                    isError: true,
                }
        
            default:
                return state;
    }
}