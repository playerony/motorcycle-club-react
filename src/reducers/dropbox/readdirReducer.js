import {
    FAILURE_READDIR,
    REQUEST_READDIR,
    RESPONSE_READDIR
} from '../../constants/dropbox/dropbox.contants';
  
export function readdir(
    state = {
        payload: [],
        error: [],
        isFetching: false,
        isError: false
    },
        action
    ) {
        switch(action.type) {
            case REQUEST_READDIR:
                return {
                    ...state,
                    isFetching: true,
                    isError: false
                }
        
            case RESPONSE_READDIR:
                return {
                    ...state,
                    payload: action.json,
                    isFetching: false,
                    isError: false
                }
        
            case FAILURE_READDIR:
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